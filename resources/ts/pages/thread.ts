import { Page } from '.';
import { Thread } from '../model';
import { DOM } from '../utils';
import { PostView, ToolsView } from '../views';

const faviconSize = 16;

export class ThreadPage implements Page {
  readonly posts: PostView[];
  readonly tools: ToolsView;
  readonly model: Thread;

  protected readonly $updater: HTMLElement;
  protected readonly faviconHref: string;

  constructor(readonly threadId: number) {
    const $posts = DOM.qsa('.post') as HTMLElement[];
    this.posts = $posts.map($post => new PostView($post));

    const $tools = DOM.qs('.tools') as HTMLElement;
    if ($tools) {
      this.tools = new ToolsView($tools);
    }

    const posts = this.posts.map(view => view.model);
    this.model = new Thread(threadId, posts);

    this.$updater = DOM.qid('thread-updater');
    if (this.$updater) {
      const $update = DOM.qs('.thread-updater__update', this.$updater);
      if ($update) {
        $update.addEventListener('click', e => {
          e.preventDefault();
          this.model.getNewPosts();
          return false;
        });
      }

      const $enabled = DOM.qs('.thread-updater__auto-checkbox', this.$updater) as HTMLInputElement;
      if ($enabled) {
        $enabled.checked = this.model.isUpdateEnabled;

        $enabled.addEventListener('change', () => {
          this.model.isUpdateEnabled = $enabled.checked;
        });
      }

      const $count = DOM.qs('.thread-updater__count', this.$updater);
      if ($count) {
        this.model.on('counter-changed', count => {
          $count.textContent = this.model.isUpdateEnabled ? `Autoupdate in ${count}` : 'Autoupdate';
        });
      }

      const $loader = DOM.qs('.thread-updater__loader', this.$updater);
      if ($loader) {
        this.model.on('loading-changed', loading => {
          if (loading) {
            $loader.classList.remove('hidden');
          } else {
            $loader.classList.add('hidden');
          }
        });
      }

      setTimeout(this.updateCounter.bind(this), 1000);
    }

    this.model.on('new-posts-loaded', html => {
      const $wrapper = DOM.qs('.post').parentElement;
      if (!$wrapper) {
        return;
      }

      const latestPostId = this.model.latestPostId;
      $wrapper.insertAdjacentHTML('beforeend', html);
      const $posts = DOM.qsa('.post', $wrapper);
      const $newPosts = $posts
        .filter($post => {
          const id = +$post.getAttribute('data-post-id');
          return id > latestPostId;
        });

      if ($newPosts.length) {
        $newPosts.forEach(($post, index) => {
          // Add post number in thread.
          const $postNo = document.createElement('span');
          $postNo.classList.add('post-header__post-no');
          $postNo.textContent = `#${$posts.length - $newPosts.length + index + 1}`;

          const $refWrapper = DOM.qs('.post-header__reflink-wrapper', $post);
          $refWrapper.appendChild($postNo);

          const $mobileRefWrapper = DOM.qs('.post-header-mobile__reflink-wrapper', $post);
          $mobileRefWrapper.appendChild($postNo.cloneNode(true));

          // Create view & model for post.
          const view = new PostView($post as HTMLElement);
          this.posts.push(view);
          this.model.posts.push(view.model);
        });

        // Update unread posts count.
        if (document.hidden) {
          this.model.unreadPosts += $newPosts.length;
        }
      }
    });

    const $favicon = DOM.qid('favicon');
    this.faviconHref = $favicon.getAttribute('href');

    document.addEventListener('visibilitychange', () => {
      // Update unread posts count.
      if (!document.hidden && this.model.unreadPosts > 0) {
        this.model.readAll();
      }
    });

    this.model.on('unread-posts-changed', count => {
      this.updateFavicon(count);
    })
  }

  async updateCounter() {
    const $status = this.$updater ? DOM.qs('.thread-updater__status', this.$updater) : null;

    try {
      await this.model.updateCounter();

      // Reset error message if have updated thread successfully.
      if ($status) {
        $status.textContent = '';
      }
    } catch (e) {
      console.error(e.message);

      if ($status) {
        $status.textContent = e.message;
      }
    }

    setTimeout(this.updateCounter.bind(this), 1000);
  }

  updateFavicon(unreadPosts: number) {
    const $canvas = document.createElement('canvas');
    $canvas.width = faviconSize;
    $canvas.height = faviconSize;

    const context = $canvas.getContext('2d');
    const $img = document.createElement('img');
    $img.src = this.faviconHref;
    $img.onload = () => {
      // Draw original favicon.
      context.drawImage($img, 0, 0, faviconSize, faviconSize);

      if (unreadPosts > 0) {
        // Draw new posts badge cicle.
        const x = $canvas.width - faviconSize / 3;
        const y = $canvas.height - faviconSize / 3;

        context.beginPath();
        context.arc(x, y, faviconSize / 3, 0, 2 * Math.PI);
        context.fillStyle = '#FF0000';
        context.fill();

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#FFFFFF';

        // Draw new posts count.
        if (unreadPosts < 10) {
          context.font = `700 10px 'Roboto Condensed', sans-serif`;
          context.fillText(unreadPosts.toString(), x, y + 1);
        } else {
          context.font = `700 8px 'Roboto Condensed', sans-serif`;
          context.fillText(unreadPosts.toString(), x, y);
        }
      }

      // Remove old favicon.
      const $oldFavicon = DOM.qid('favicon') as HTMLLinkElement;
      if ($oldFavicon) {
        document.head.removeChild($oldFavicon);
        $oldFavicon.remove();
      }

      // Add new favicon.
      const $favicon = document.createElement('link');
      $favicon.id = 'favicon';
      $favicon.rel = 'icon';
      $favicon.href = $canvas.toDataURL('image/png');
      document.head.appendChild($favicon);

      // Cleanup.
      $canvas.remove();
      $img.remove();
    };
  }
}
