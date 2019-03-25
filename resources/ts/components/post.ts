import { getCoubData, getCoubHtml } from './coub';
import { Modal } from './modal';
import { VideoPlayer } from './video-player';

import { eventBus, Events, SettingsManager } from '..';
import { DOM } from '../utils';

interface FileData {
  postId: number;
  type: 'image' | 'audio' | 'video' | 'coub';
  url: string;
  width: number;
  height: number;
}

function checkKeyCode(e: KeyboardEvent, code: number) {
  return e.keyCode === code || e.which === code;
}

export class Post {
  protected $layout: HTMLElement;
  protected $imageModal: HTMLElement;
  protected $videoModal: HTMLElement;
  protected $coubModal: HTMLElement;
  protected $player: HTMLElement;

  protected player: VideoPlayer;
  protected imageModal: Modal;
  protected videoModal: Modal;
  protected coubModal: Modal;

  protected readonly media: FileData[] = [];
  protected readonly ownPostIds: number[] = [];
  protected modals: Modal[];

  protected modalFileIndex?: number = null;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
    eventBus.$on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  protected onReady() {
    this.$layout = DOM.qs('.layout') as HTMLElement;
    this.$imageModal = DOM.qid('image-modal') as HTMLElement;
    this.$videoModal = DOM.qid('video-modal') as HTMLElement;
    this.$coubModal = DOM.qid('coub-modal') as HTMLElement;
    this.$player = DOM.qs('.player', this.$videoModal) as HTMLElement;

    this.player = new VideoPlayer(this.$player);
    this.imageModal = new Modal(this.$imageModal);
    this.videoModal = new Modal(this.$videoModal);
    this.coubModal = new Modal(this.$coubModal);

    this.modals = [
      this.imageModal,
      this.videoModal,
      this.coubModal,
    ];

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'b' || checkKeyCode(e, 66)) {
        e.preventDefault();
        this.toggleNsfw();

        return false;
      } else if (e.key === 'Escape' || checkKeyCode(e, 27)) {
        e.preventDefault();
        this.closeModals();

        return false;
      } else if (this.modalFileIndex !== null
        && (e.key === 'ArrowLeft' || checkKeyCode(e, 37)) && e.ctrlKey) {
        e.preventDefault();

        const prevIndex = this.modalFileIndex > 0
          ? this.modalFileIndex - 1 : this.media.length - 1;
        this.showMediaModal(prevIndex);

        return false;
      } else if (this.modalFileIndex !== null
        && (e.key === 'ArrowRight' || checkKeyCode(e, 39)) && e.ctrlKey) {
        e.preventDefault();

        const nextIndex = this.modalFileIndex < this.media.length - 1
          ? this.modalFileIndex + 1 : 0;
        this.showMediaModal(nextIndex);

        return false;
      }
    };

    document.addEventListener('keydown', onKeyDown, true);

    const settings = SettingsManager.load();

    document.addEventListener('click', (e: MouseEvent) => {
      if (e.button !== 0) {
        return;
      }

      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (e.target.tagName === 'A' && e.target.classList.contains('thumbnail')
        || e.target.tagName === 'IMG' && e.target.classList.contains('thumbnail__content')) {
        e.preventDefault();

        const $link = e.target.tagName === 'A' ? e.target : e.target.parentElement;
        const link = $link.getAttribute('href');
        if (this.modalFileIndex !== null && this.media[this.modalFileIndex].url === link) {
          this.closeModals();
        } else {
          const index = this.media.findIndex(file => file.url === link);
          if (index !== -1) {
            this.showMediaModal(index);
          }
        }

        return false;
      } else if (settings.common.hidePopupOnOutsideClick) {
        this.modals.filter(modal => !modal.isDragging)
          .forEach(modal => modal.hide());
      }
    });
  }

  protected onPostsInserted(posts: HTMLElement[]) {
    posts.forEach($post => {
      const $fileLink = DOM.qs('.thumbnail', $post);
      if ($fileLink) {
        const url = $fileLink.getAttribute('href');

        let type = 'image';
        if (url.endsWith('.mp3')) {
          type = 'audio';
        } else if (url.endsWith('.mp4') || url.endsWith('.webm')) {
          type = 'video';
        }

        const postId = +$post.getAttribute('data-post-id');
        if (!this.media.find(file => file.postId === postId && file.url === url)) {
          this.media.push({
            postId,
            type,
            url,
            width: +$fileLink.getAttribute('data-width'),
            height: +$fileLink.getAttribute('data-height'),
          } as FileData);
        }
      }

      this.processReplies($post);
      this.processOEmbedLinks($post);
    });
  }

  protected processReplies(post: HTMLElement) {
    const name = (localStorage.getItem('user.name') || '')
      + (localStorage.getItem('user.tripcode') || '');

    const postNameEl = DOM.qs('.post-header__name', post);
    const postTripcodeEl = DOM.qs('.post-header__tripcode', post);
    const postName = (postNameEl ? postNameEl.textContent : '')
      + (postTripcodeEl ? postTripcodeEl.textContent : '');

    if (name.length && postName.indexOf(name) !== -1) {
      const postId = +post.getAttribute('data-post-id');
      this.ownPostIds.push(postId);

      post.classList.add('post--own');
    }

    const settings = SettingsManager.load();
    const links = DOM.qsa('.post__reference-link', post);
    links.forEach(link => {
      const targetId = +link.getAttribute('data-target-post-id');
      if (this.ownPostIds.indexOf(targetId) !== -1) {
        if (settings.common.addYouToLinks) {
          const youEl = document.createElement('span');
          youEl.classList.add('post__reference-link-author');
          youEl.innerHTML = '(You)';
          link.parentElement.insertBefore(youEl, link.nextSibling);
        }

        post.classList.add('post--reply');
        link.classList.add('post__reference-link--reply');
      }
    });
  }

  protected async processOEmbedLinks($post: HTMLElement) {
    const postContent = DOM.qs('.post__content', $post);
    if (!postContent) {
      return;
    }

    const postMessage = DOM.qs('.post__message', $post);
    const links = DOM.qsa('a[href]', postMessage);
    links.filter(link => !link.hasAttribute('data-processed'))
      .map(link => {
        link.setAttribute('data-processed', 'true');
        return link.getAttribute('href');
      })
      .map(url => url.match('^https?:\/\/(?:www\.)?coub\.com\/view\/([0-9a-z]+)$'))
      .filter(matches => matches && matches.length >= 1)
      .forEach(async matches => {
        try {
          const coub = await getCoubData(matches[1]);
          const thumbnailUrl = coub.image_versions.template.replace('%{version}', 'small');
          const thumbnail = document.createElement('div');
          thumbnail.classList.add('post__file-preview', 'file');
          thumbnail.innerHTML = `
<div class="post__file-info file-info filesize">
  <a class="file-info__link" href="https://coub.com/view/${coub.permalink}" target="_blank">Coub</a>
  <span class="file-info__size"></span>
</div>

<a class="file__thumbnail thumbnail thumbnail--coub" href="https://coub.com/view/${coub.permalink}" target="_blank">
  <img class="thumbnail__content thumbnail__content--coub" src="${thumbnailUrl}" />
</a>`;
          thumbnail.style.maxHeight = '250px';
          thumbnail.style.maxWidth = '250px';
          postContent.insertBefore(thumbnail, postMessage);

          const postId = +$post.getAttribute('data-post-id');
          const url = `https://coub.com/view/${coub.permalink}`;
          if (!this.media.find(file => file.postId === postId && file.url === url)) {
            this.media.push({
              postId,
              type: 'coub',
              url,
              width: coub.dimensions.big[0],
              height: coub.dimensions.big[1],
            });
          }

          this.media.sort((a, b) => a.postId - b.postId);
        } catch (e) {
          console.warn(`Can\'t load coub '${matches[0]}':`, e);
        }
      });
  }

  protected toggleNsfw() {
    const nsfwClass = 'layout--nsfw';
    const settings = SettingsManager.load();

    settings.common.nsfw = !settings.common.nsfw;
    if (settings.common.nsfw) {
      this.$layout.classList.add(nsfwClass);
    } else {
      this.$layout.classList.remove(nsfwClass);
    }

    SettingsManager.save(settings);
  }

  protected async showMediaModal(mediaIndex: number) {
    this.closeModals();

    this.modalFileIndex = mediaIndex;

    const file = this.media[mediaIndex];

    const scale = Math.max(
      file.width / window.innerWidth,
      file.height / window.innerHeight
    );

    const width = scale <= 1 ? file.width : file.width / scale;
    const height = scale <= 1 ? file.height : file.height / scale;

    const left = Math.round(window.innerWidth / 2 - width / 2);
    const top = Math.round(window.innerHeight / 2 - height / 2);

    const onMove = (left: number, top: number, width: number, height: number) => {
      const padding = 40;
      return {
        left: Math.max(padding - width, Math.min(left, window.innerWidth - padding)),
        top: Math.max(padding - height, Math.min(top, window.innerHeight - padding)),
      };
    };

    if (file.type === 'image') {
      const $image = DOM.qs('img', this.$imageModal);
      $image.setAttribute('src', file.url);

      this.imageModal.show(left, top, width, height, () => {
        $image.setAttribute('src', '');
        this.modalFileIndex = null;
      }, onMove);
    } else if (file.type === 'video') {
      const $video = DOM.qs('video', this.$videoModal);
      $video.setAttribute('src', file.url);
      ($video as HTMLVideoElement).load();

      this.videoModal.show(left, top, width, height, () => {
        ($video as HTMLVideoElement).pause();
        $video.setAttribute('src', '');
        this.modalFileIndex = null;
      }, onMove);
    } else if (file.type === 'coub') {
      const $content = DOM.qid('coub-modal_content');
      $content.innerHTML = await getCoubHtml(file.url);

      this.coubModal.show(left, top, width, height, () => {
        $content.innerHTML = '';
        this.modalFileIndex = null;
      }, onMove);
    }
  }

  protected closeModals = () => {
    this.modals.forEach(modal => modal.hide());
  };
}
