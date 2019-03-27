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

interface PostPopup {
  id: number;
  parentId?: number;
  postId: number;
  childrenIds: number[];
  $parentLink: HTMLElement;
  $popup: HTMLElement;
  hover: boolean;
}

function checkKeyCode(e: KeyboardEvent, code: number) {
  return e.keyCode === code || e.which === code;
}

function offset($el: HTMLElement) {
  const rect = $el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
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

  protected nextPopupId = 0;
  protected popups: { [key: number]: PostPopup } = {};

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
    this.coubModal = new Modal(this.$coubModal, false);

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

    const checkPopup = (popup: PostPopup) => {
      if (popup.hover) {
        return false;
      }

      // Check if any children has hover.
      const childrenIds = [...popup.childrenIds];
      while (childrenIds.length) {
        const childId = childrenIds.shift();
        const child = this.popups[childId];
        if (!child) {
          continue;
        }

        if (child.hover) {
          return false;
        }

        childrenIds.push(...child.childrenIds);
      }

      // Close popup if none of it's children has hover.
      popup.$popup.classList.add('faded');
      setTimeout(() => {
        popup.$popup.remove();
      }, 200);

      const popupId = popup.id;
      const parentId = popup.parentId;
      delete this.popups[popupId];

      // Check parent popup.
      if (parentId !== null) {
        const parent = this.popups[parentId];
        if (parent) {
          parent.childrenIds = parent.childrenIds.filter(id => id !== popupId);
          setTimeout(() => {
            checkPopup(parent);
          }, 100);
        }
      }

      return true;
    }

    document.addEventListener('mouseover', e => {
      const $target = e.target as HTMLElement;
      if ($target.tagName === 'A'
        && ($target.classList.contains('post__reference-link')
          || $target.classList.contains('post__refmap-link'))) {
        const postId = +$target.getAttribute('data-target-post-id');
        if (!postId) {
          return;
        }

        const $postContent = DOM.qs(`#reply_${postId} > .post__inner`);
        if (!$postContent) {
          return;
        }

        let parentId: number = null;
        const $targetPost = $target.closest('.post');
        if ($targetPost.hasAttribute('data-popup-id')) {
          parentId = +$targetPost.getAttribute('data-popup-id');
        }

        const isAlreadyOpen = Object.keys(this.popups)
          .map(key => this.popups[+key])
          .filter(popup => popup.postId === postId && popup.parentId === parentId)
          .length;
        if (isAlreadyOpen) {
          return;
        }

        const $popup = document.createElement('div');
        $popup.setAttribute('data-post-id', postId.toString());
        $popup.classList.add('post', 'post_reply', 'post--popup', 'fade', 'faded');
        $popup.style.position = 'absolute';

        const targetOffset = offset($target);
        const layoutOffset = offset(this.$layout);

        const targetRect = $target.getBoundingClientRect();
        const postRect = $postContent.getBoundingClientRect();

        let left = targetOffset.left - layoutOffset.left + targetRect.width / 2;
        let top = targetOffset.top - layoutOffset.top;

        let transformOriginX = '0';
        let transformOriginY = '0';

        if (window.innerHeight - targetRect.top < postRect.height) {
          top = top - postRect.height;
          transformOriginY = '100%';
        } else {
          top += targetRect.height;
        }

        const maxWidth = 0.6;
        const scrollBarPadding = 16;
        if (window.innerWidth - targetRect.left - scrollBarPadding < postRect.width * maxWidth) {
          left = Math.max(0, left - postRect.width * maxWidth);
          transformOriginX = '100%';
        }

        $popup.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;

        $popup.style.left = `${left}px`;
        $popup.style.top = `${top}px`;
        $popup.style.maxWidth = `${Math.floor(maxWidth * 100)}%`;

        const $postContentCopy = $postContent.cloneNode(true);
        $popup.appendChild($postContentCopy);

        this.$layout.appendChild($popup);

        setTimeout(() => {
          $popup.classList.remove('faded');
        }, 50);

        const popupId = this.nextPopupId;
        this.nextPopupId++;

        const parent = this.popups[parentId];
        if (parent) {
          parent.childrenIds.push(popupId);
        }

        $popup.setAttribute('data-popup-id', popupId.toString());

        this.popups[popupId] = {
          id: popupId,
          parentId,
          postId,
          childrenIds: [],
          $parentLink: $target,
          $popup,
          hover: true,
        };

        const popupCloseTimeout = 750;

        const linkMouseLeave = (e: Event) => {
          const popupId = +$popup.getAttribute('data-popup-id');
          const popup = this.popups[popupId];
          if (!popup) {
            $target.removeEventListener('mouseleave', linkMouseLeave);
            return;
          }

          popup.hover = false;

          setTimeout(() => {
            if (checkPopup(popup)) {
              $target.removeEventListener('mouseleave', linkMouseLeave);
            }
          }, popupCloseTimeout);
        };

        $target.addEventListener('mouseleave', linkMouseLeave);

        $popup.addEventListener('mouseenter', e => {
          const popupId = +$popup.getAttribute('data-popup-id');
          const popup = this.popups[popupId];
          if (!popup) {
            return;
          }

          popup.hover = true;
        });

        $popup.addEventListener('mouseleave', e => {
          const popupId = +$popup.getAttribute('data-popup-id');
          const popup = this.popups[popupId];
          if (!popup) {
            return;
          }

          popup.hover = false;

          setTimeout(() => {
            if (checkPopup(popup)) {
              $target.removeEventListener('mouseleave', linkMouseLeave);
            }
          }, popupCloseTimeout);
        });
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

    const postId = +post.getAttribute('data-post-id');
    if (name.length && postName.indexOf(name) !== -1) {
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

      const $targetPost = DOM.qid(`reply_${targetId}`);
      if ($targetPost) {
        const $refmap = DOM.qs('.post__refmap', $targetPost);
        if (DOM.qs(`[data-target-post-id="${postId}"]`, $refmap)) {
          return;
        }

        const $reflink = document.createElement('a');
        $reflink.href = `#reply_${postId}`;
        $reflink.setAttribute('data-target-post-id', postId.toString());
        $reflink.classList.add('post__refmap-link');
        $reflink.textContent = `>\u200b>${postId}`;

        const $reflinkWrapper = document.createElement('li');
        $reflinkWrapper.classList.add('post__refmap-item');
        $reflinkWrapper.appendChild($reflink);

        $refmap.appendChild($reflinkWrapper);
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
