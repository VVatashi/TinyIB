import { BasePage } from './base';
import { eventBus } from '../event-bus';
import { Events } from '../events';
import { Thread, ThreadUpdater } from '../model';
import { DOM } from '../utils';
import { PostView } from '../views';
import { LocalStorage } from '../local-storage';
import { store } from '../store';
import { Settings } from '../settings';

const faviconSize = 16;

interface WSPostData {
  id: number;
  created_at: number;
  message: string;
  subject: string;
  name: string;
  tripcode: string;
  file: string;
  file_size: number;
  file_type: string;
  image_height: number;
  image_width: number;
  thumb: string;
  thumb_height: number;
  thumb_width: number;
  html: string;
}

interface WSAddPost {
  id: number;
  timestamp: number;
  type: 'add_post';
  data: WSPostData;
}

interface WSRemovePost {
  id: number;
  timestamp: number;
  type: 'remove_post';
  data: {
    id: number;
  };
}

interface WSVote {
  id: number;
  timestamp: number;
  type: 'vote';
  data: {
    id: number;
    post_id: number;
    user_id: number;
    score: number;
    total_score: number;
  };
}

interface WSLatency {
  id: number;
  timestamp: number;
  type: 'latency';
}

type WSCommand = WSAddPost | WSRemovePost | WSVote | WSLatency;

export class ThreadPage extends BasePage {
  readonly posts: PostView[];
  readonly model: Thread;
  readonly updaterModel: ThreadUpdater;

  protected readonly $updater: HTMLElement;
  protected readonly $updaterWS: HTMLElement;
  protected readonly $status: HTMLElement;
  protected readonly $statusWS: HTMLElement;
  protected readonly $title: HTMLElement;
  protected readonly faviconHref: string;

  protected title: string;
  protected notifyIntervalTimer: number = null;

  constructor(readonly threadId: number) {
    super();

    const $favicon = DOM.qid('favicon');
    this.faviconHref = $favicon.getAttribute('href');

    this.checkLatensy = this.checkLatensy.bind(this);

    this.$updater = DOM.qid('thread-updater');
    this.$status = this.$updater ?
      DOM.qs('.thread-updater__status', this.$updater) as HTMLElement : null;
    this.$updaterWS = DOM.qid('thread-updater-ws');
    this.$statusWS = this.$updaterWS ?
      DOM.qs('.thread-updater__status', this.$updaterWS) as HTMLElement : null;

    const $posts = DOM.qsa('.post') as HTMLElement[];
    this.posts = $posts.map($post => new PostView($post));

    this.$title = DOM.qs('title') as HTMLElement;
    this.title = this.$title.textContent;
    if (this.posts.length && this.posts[0].model.subject) {
      this.title += ' — ' + this.posts[0].model.subject;
    } else {
      this.title += ' — Thread #' + this.posts[0].model.id;
    }
    this.updateTitle(0);

    const posts = this.posts.map(view => view.model);
    this.model = new Thread(threadId, posts);
    this.updaterModel = new ThreadUpdater(this.model);
    this.bindModel();
    this.updatePostCounter();
  }

  async updateCounter() {
    try {
      await this.updaterModel.updateCounter();
    } catch (e) {
      console.error(e);

      if (this.$status) {
        this.$status.textContent = `Error: ${e.message}`;
      }
    }

    setTimeout(this.updateCounter.bind(this), 1000);
  }

  updateFavicon(unreadPosts: number, hasReplies: boolean) {
    const { settings } = store.getState().settings;
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
        context.fillStyle = hasReplies ? '#0000FF' : '#FF0000';
        context.fill();

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#FFFFFF';

        if (!settings.common.showUnreadCountInTitle) {
          // Draw new posts count.
          if (unreadPosts < 10) {
            context.font = `700 10px 'Roboto Condensed', sans-serif`;
            context.fillText(unreadPosts.toString(), x, y + 1);
          } else {
            context.font = `700 8px 'Roboto Condensed', sans-serif`;
            context.fillText(unreadPosts.toString(), x, y);
          }
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

  updateTitle(unreadPosts: number) {
    const { settings } = store.getState().settings;
    if (settings.common.showUnreadCountInTitle && unreadPosts > 0) {
      this.$title.textContent = `[${this.model.unreadPosts}] ${this.title}`;
    } else {
      this.$title.textContent = this.title;
    }
  }

  protected updatePostCounter() {
    let index = 1;
    for (let i = 0; i < this.posts.length; ++i) {
      const post = this.posts[i].model;
      let text = '';
      if (!post.deleted) {
        text = `#${index}`;
        index++;
      } else {
        text = 'deleted';
      }

      const $post = this.posts[i].$element;
      let $postNo = DOM.qsa('.post-header__post-no', $post);
      if ($postNo.length) {
        $postNo.forEach($el => $el.textContent = text);
      } else {
        const $el = document.createElement('span');
        $el.classList.add('post-header__post-no');
        $el.textContent = text;

        const $refWrapper = DOM.qs('.post-header__reflink-wrapper', $post);
        $refWrapper.appendChild($el);

        const $mobileRefWrapper = DOM.qs('.post-header-mobile__reflink-wrapper', $post);
        $mobileRefWrapper.appendChild($el.cloneNode(true));
      }
    }
  }

  protected processNewPosts($wrapper: Element) {
    const { settings } = store.getState().settings;
    const $posts = DOM.qsa('.post', $wrapper);
    const $newPosts = $posts
      .filter($post => {
        const id = +$post.getAttribute('data-post-id');
        return id > this.model.latestPostId;
      });

    if ($newPosts.length) {
      const prevUnreadCount = this.model.unreadPosts;

      // Create view & model for each post.
      const views = $newPosts.map($post => new PostView($post as HTMLElement));
      this.posts.push(...views);

      const models = views.map(view => view.model);
      this.model.addPosts(models, document.hidden);
      this.updateFavicon(this.model.unreadPosts, this.model.hasReplies);
      this.updateTitle(this.model.unreadPosts);

      if (this.model.unreadPosts > 0) {
        const notifyTypeKey = this.model.hasReplies
          ? 'post.unreadRepliesNotify.mode'
          : 'post.unreadPostsNotify.mode';
        const notifyType = Settings.get(settings, notifyTypeKey);
        switch (notifyType) {
          case 'every-post':
            this.notify(this.model.hasReplies);
            break;

          case 'once':
            if (prevUnreadCount === 0) {
              this.notify(this.model.hasReplies);
            }
            break;

          case 'repeat':
            if (this.notifyIntervalTimer) {
              clearInterval(this.notifyIntervalTimer);
              this.notifyIntervalTimer = null;
            }

            const intervalKey = this.model.hasReplies
              ? 'post.unreadRepliesNotify.interval'
              : 'post.unreadPostsNotify.interval';
            const interval = Settings.get(settings, intervalKey) * 1000;
            this.notify(false);
            this.notifyIntervalTimer = setInterval(() => {
              this.notify(false);
            }, interval);
            break;

          default:
            break;
        }
      }

      this.updatePostCounter();
      eventBus.emit(Events.PostsInserted, $newPosts);
    }
  }

  protected onNewPostsLoaded(html: string) {
    // Reset error message if have updated thread successfully.
    if (this.$status) {
      this.$status.textContent = '';
    }

    const $wrapper = DOM.qs('.post').parentElement;
    if (!$wrapper) {
      return;
    }

    const $tempWrapper = document.createElement('div');
    $tempWrapper.insertAdjacentHTML('beforeend', html);

    const $posts = DOM.qsa('.post', $tempWrapper);
    $posts.forEach($post => {
      const id = +$post.getAttribute('data-post-id');
      // If post does not already exist.
      if (!DOM.qs(`[data-post-id="${id}"]`)) {
        $wrapper.insertAdjacentElement('beforeend', $post);
      }
    });

    $tempWrapper.remove();
    this.processNewPosts($wrapper);
  }

  protected onNewWSPostDataLoaded(data: WSPostData) {
    const $wrapper = DOM.qs('.post').parentElement;
    if (!$wrapper) {
      return;
    }

    $wrapper.insertAdjacentHTML('beforeend', data.html);
    this.processNewPosts($wrapper);
  }

  protected removePost(id: number) {
    const post = this.posts.find(post => post.model.id === id);
    if (post) {
      post.model.deleted = true;

      if (post.$element) {
        post.$element.classList.add('post--deleted');
      }
    }

    this.updatePostCounter();
  }

  protected setPostScore(id: number, score: number) {
    const $wrapper = DOM.qs('.post').parentElement;
    if (!$wrapper) {
      return;
    }

    const $post = DOM.qs(`[data-post-id="${id}"]`, $wrapper);
    if ($post) {
      const $score = DOM.qs('.post-header__score-value', $post);
      if ($score) {
        $score.textContent = score.toString();
      }
    }
  }

  protected notify(reply: boolean) {
    const { settings } = store.getState().settings;
    const $source = DOM.qid('notify-source') as HTMLSourceElement;
    const $notify = DOM.qid('notify') as HTMLAudioElement;
    if ($source && $notify) {
      const oldSrc = $source.src;
      const typeKey = reply
        ? 'post.unreadRepliesNotify.type'
        : 'post.unreadPostsNotify.type';
      const type = Settings.get(settings, typeKey);
      switch (type) {
        case 'default-1':
          $source.src = `${window.baseUrl}/mp3/notify-1.mp3`;
          break;

        case 'default-2':
          $source.src = `${window.baseUrl}/mp3/notify-2.mp3`;
          break;

        case 'custom':
          const srcKey = reply
            ? 'post.unreadRepliesNotifyFile'
            : 'post.unreadPostsNotifyFile';
          $source.src = LocalStorage.get(srcKey);
          break;

        default:
          break;
      }

      if (oldSrc !== $source.src) {
        $notify.load();
      }

      $notify.play();
    }
  }

  protected bindThreadUpdater() {
    if (this.$updater) {
      this.$updater.classList.remove('hidden');

      const $update = DOM.qs('.thread-updater__update', this.$updater);
      if ($update) {
        $update.addEventListener('click', async e => {
          e.preventDefault();

          try {
            await this.updaterModel.getNewPosts();
          } catch (e) {
            console.error(e);

            if (this.$status) {
              this.$status.textContent = `Error: ${e.message}`;
            }
          }

          return false;
        });
      }

      const $enabled = DOM.qs('.thread-updater__auto-checkbox', this.$updater) as HTMLInputElement;
      if ($enabled) {
        $enabled.checked = this.updaterModel.isUpdateEnabled;

        $enabled.addEventListener('change', () => {
          this.updaterModel.isUpdateEnabled = $enabled.checked;
        });
      }

      const $count = DOM.qs('.thread-updater__count', this.$updater);
      if ($count) {
        this.updaterModel.on('counter-changed', count => {
          $count.textContent = this.updaterModel.isUpdateEnabled ? `Autoupdate in ${count}` : 'Autoupdate';
        });
      }

      const $loader = DOM.qs('.thread-updater__loader', this.$updater);
      if ($loader) {
        this.updaterModel.on('loading-changed', loading => {
          if (loading) {
            $loader.classList.remove('hidden');
          } else {
            $loader.classList.add('hidden');
          }
        });
      }

      setTimeout(this.updateCounter.bind(this), 1000);
    }

    if (this.$updaterWS) {
      this.$updaterWS.classList.add('hidden');
    }

    eventBus.on(Events.PostCreated, this.updaterModel.getNewPosts.bind(this.updaterModel));
    eventBus.on(Events.PostDeleted, async id => {
      this.updatePostCounter();
    });
  }

  protected socket: WebSocket;

  protected readonly checkLatencyInterval = 10000;

  protected readonly latencyTimeout = 20000;
  protected latencyTimer: number;

  protected readonly retryInterval = 1000;
  protected readonly maxRetries = 10;
  protected retries = 0;

  protected readonly receivedMessageIds = new Set();

  protected checkLatensy() {
    if (this.latencyTimer) {
      return;
    }

    this.socket.send(JSON.stringify({
      command: 'latency',
      timestamp: Date.now(),
    }));

    this.latencyTimer = setTimeout(() => {
      console.warn('WebSocket timed out');
      const state = this.socket.readyState;
      if (state !== WebSocket.CLOSED && state !== WebSocket.CLOSING) {
        this.socket.close();
      }
    }, this.latencyTimeout);
  }

  protected bindWSThreadUpdater() {
    if (this.$updater) {
      this.$updater.classList.add('hidden');
    }

    if (this.$updaterWS) {
      this.$updaterWS.classList.remove('hidden');
    }

    if (this.$statusWS) {
      this.$statusWS.textContent = 'WebSocket connecting...';
    }

    this.socket = new WebSocket(window.websocketUrl);
    this.socket.addEventListener('open', async e => {
      const board = window.board;
      const threadId = this.threadId;
      const channel = `${board}:thread:${threadId}`;
      this.socket.send(JSON.stringify({
        command: 'listen',
        channel,
      }));

      if (this.$statusWS) {
        this.$statusWS.textContent = 'WebSocket connected';
      }

      this.retries = 0;

      if (this.latencyTimer) {
        clearTimeout(this.latencyTimer);
        this.latencyTimer = null;
      }

      this.checkLatensy();

      // Load missed posts throught the API.
      try {
        await this.updaterModel.getNewPosts();
      } catch (e) {
        console.error(e);

        if (this.$status) {
          this.$status.textContent = `Error: ${e.message}`;
        }
      }
    });

    this.socket.addEventListener('message', e => {
      const message = JSON.parse(e.data) as WSCommand;
      this.socket.send(JSON.stringify({
        command: 'ack',
        id: message.id,
      }));

      if (this.receivedMessageIds.has(message.id)) {
        return;
      }
      this.receivedMessageIds.add(message.id);

      if (message.type === 'add_post') {
        this.onNewWSPostDataLoaded(message.data);
      } else if (message.type === 'remove_post') {
        this.removePost(message.data.id);
      } else if (message.type === 'vote') {
        this.setPostScore(message.data.post_id, message.data.total_score);
      } else if (message.type === 'latency') {
        const latency = Date.now() - message.timestamp;
        this.$statusWS.textContent = `WebSocket connected: latency ${latency} ms`;

        if (this.latencyTimer) {
          clearTimeout(this.latencyTimer);
          this.latencyTimer = null;
        }

        setTimeout(this.checkLatensy, this.checkLatencyInterval);
      }
    });

    this.socket.addEventListener('error', e => {
      console.error('WebSocket error: ', e);

      if (this.$statusWS) {
        this.$statusWS.textContent = 'WebSocket error';
      }
    });

    this.socket.addEventListener('close', e => {
      console.warn('WebSocket closed: ', e);

      if (this.$statusWS) {
        this.$statusWS.textContent = `WebSocket closed: ${e.reason} (${e.code})`;
      }

      if (this.retries < this.maxRetries) {
        const interval = Math.min(30000, (this.retries + 1) * this.retryInterval);
        setTimeout(() => {
          this.retries++;
          console.info(`Retrying connect to websocket (${this.retries}/${this.maxRetries}).`);
          this.bindWSThreadUpdater();
        }, interval);
      } else {
        console.warn('Fallback to legacy thread updater.');
        this.bindThreadUpdater();
      }
    });
  }

  protected checkWebSocketSupport() {
    if (!('WebSocket' in window) && !('MozWebSocket' in window)) {
      return false;
    }

    try {
      new WebSocket('wss://echo.websocket.org');
      return true;
    } catch {
      return false;
    }
  }

  protected bindModel() {
    const { settings } = store.getState().settings;
    this.updaterModel.on('new-posts-loaded', this.onNewPostsLoaded.bind(this));

    if (window.websocketUrl && window.websocketUrl.length
      && !settings.post.disableWebSockets
      && this.checkWebSocketSupport()) {
      this.bindWSThreadUpdater();
    } else {
      this.bindThreadUpdater();
    }

    document.addEventListener('visibilitychange', () => {
      // Update unread posts count.
      if (!document.hidden) {
        this.model.readAll();
        this.updateFavicon(this.model.unreadPosts, this.model.hasReplies);
        this.updateTitle(this.model.unreadPosts);

        if (this.notifyIntervalTimer) {
          clearInterval(this.notifyIntervalTimer);
          this.notifyIntervalTimer = null;
        }
      }
    });
  }
}
