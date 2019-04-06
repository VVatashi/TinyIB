import { Modal } from './modal';
import { VideoPlayer } from './video-player';

import { eventBus, Events, SettingsManager } from '..';
import { Coub } from '../services';
import { DOM } from '../utils';

interface FileData {
  postId: number;
  type: 'image' | 'audio' | 'video' | 'coub' | 'youtube';
  url: string;
  width: number;
  height: number;
  data?: string;
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

function checkKeyChar(e: KeyboardEvent, char: string) {
  return e.key === char || checkKeyCode(e, char.toUpperCase().charCodeAt(0));
}

function offset($el: HTMLElement) {
  const rect = $el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export class Post {
  protected $layout: HTMLElement = null;
  protected $modal: HTMLElement = null;
  protected modal: Modal = null;
  protected player: VideoPlayer = null;

  protected readonly media: FileData[] = [];
  protected readonly ownPostIds: number[] = [];

  protected modalFileIndex: number = null;

  protected nextPopupId = 0;
  protected popups: { [key: number]: PostPopup } = {};

  constructor() {
    eventBus.on(Events.Ready, this.onReady.bind(this));
    eventBus.on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  protected onReady() {
    this.$layout = DOM.qs('.layout') as HTMLElement;

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (checkKeyChar(e, 'b')) {
        e.preventDefault();
        this.toggleNsfw();

        return false;
      } else if (checkKeyChar(e, 'u')) {
        e.preventDefault();

        const settings = SettingsManager.load();
        if (settings.common.enableThreadAutoupdate) {
          eventBus.emit(Events.UpdateThread);
        }

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

        const $post = DOM.qid(`reply_${this.media[prevIndex].postId}`);
        if ($post) {
          $post.scrollIntoView(true);
        }

        this.showMediaModal(prevIndex);

        return false;
      } else if (this.modalFileIndex !== null
        && (e.key === 'ArrowRight' || checkKeyCode(e, 39)) && e.ctrlKey) {
        e.preventDefault();

        const nextIndex = this.modalFileIndex < this.media.length - 1
          ? this.modalFileIndex + 1 : 0;

        const $post = DOM.qid(`reply_${this.media[nextIndex].postId}`);
        if ($post) {
          $post.scrollIntoView(true);
        }

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
        if (this.modal && !this.modal.isDragging) {
          this.modal.hide();
        }
      }

      if (e.target.classList.contains('file__hide')) {
        const $file = e.target.closest('.file');
        if (!$file) {
          return;
        }

        $file.classList.add('file--hidden');

        const $info = DOM.qs('.post__file-info', $file);
        if ($info) {
          $info.classList.add('hidden');
        }

        const $hide = DOM.qs('.file__hide', $file);
        if ($hide) {
          $hide.classList.add('hidden');
        }

        const $show = DOM.qs('.file__show', $file);
        if ($show) {
          $show.classList.remove('hidden');
        }

        const $thumbnail = DOM.qs('.file__thumbnail', $file);
        if ($thumbnail) {
          $thumbnail.classList.add('hidden');
        }
      }

      if (e.target.classList.contains('file__show')) {
        const $file = e.target.closest('.file');
        if (!$file) {
          return;
        }

        $file.classList.remove('file--hidden');

        const $info = DOM.qs('.post__file-info', $file);
        if ($info) {
          $info.classList.remove('hidden');
        }

        const $hide = DOM.qs('.file__hide', $file);
        if ($hide) {
          $hide.classList.remove('hidden');
        }

        const $show = DOM.qs('.file__show', $file);
        if ($show) {
          $show.classList.add('hidden');
        }

        const $thumbnail = DOM.qs('.file__thumbnail', $file);
        if ($thumbnail) {
          $thumbnail.classList.remove('hidden');
        }
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

    const openPopup = async ($link: HTMLElement) => {
      const targetPostId = +$link.getAttribute('data-target-post-id');
      if (!targetPostId) {
        return;
      }

      const $parentPost = $link.closest('.post');
      const parentPostId = +$parentPost.getAttribute('data-post-id');

      let $postContent = DOM.qs(`#reply_${targetPostId} > .post__inner`);
      if (!$postContent) {
        // Try fetch post.
        const response = await fetch(`${window.baseUrl}/ajax/post/${targetPostId}`, {
          credentials: 'same-origin',
        });

        if (response.status !== 200) {
          return;
        }

        const html = await response.text();
        const $post = document.createElement('div');
        $post.classList.add('hidden');
        $post.insertAdjacentHTML('beforeend', html);

        this.$layout.appendChild($post);

        $postContent = DOM.qs('.post__inner', $post);
      }

      let parentId: number = null;
      const $targetPost = $link.closest('.post');
      if ($targetPost.hasAttribute('data-popup-id')) {
        parentId = +$targetPost.getAttribute('data-popup-id');
      }

      const isAlreadyOpen = Object.keys(this.popups)
        .map(key => this.popups[+key])
        .filter(popup => popup.postId === targetPostId && popup.parentId === parentId)
        .length;
      if (isAlreadyOpen) {
        return;
      }

      const $popup = document.createElement('div');
      $popup.setAttribute('data-post-id', targetPostId.toString());
      $popup.classList.add('post', 'post_reply', 'post--popup', 'fade', 'faded');
      $popup.style.position = 'absolute';
      $popup.style.maxWidth = '60%';

      const $postContentCopy = $postContent.cloneNode(true);
      $popup.appendChild($postContentCopy);

      this.$layout.appendChild($popup);

      const backLinks = DOM.qsa(`a[data-target-post-id="${parentPostId}"]`, $popup) as HTMLElement[];
      backLinks.forEach(link => link.style.fontWeight = '700');

      setTimeout(() => {
        $popup.classList.remove('faded');
      }, 50);

      const targetOffset = offset($link);
      const layoutOffset = offset(this.$layout);
      const targetRect = $link.getBoundingClientRect();
      let left = targetOffset.left - layoutOffset.left + targetRect.width / 2;
      let top = targetOffset.top - layoutOffset.top;
      let transformOriginX = '0';
      let transformOriginY = '0';

      const widthPadding = 16;
      if (window.innerWidth - targetRect.left - widthPadding < $popup.offsetWidth) {
        left = Math.max(0, left - $popup.offsetWidth);
        transformOriginX = '100%';
      }

      const heightPadding = 16;
      if (window.innerHeight - targetRect.top - heightPadding < $popup.offsetHeight) {
        top = top - $popup.offsetHeight;
        transformOriginY = '100%';
      } else {
        top += targetRect.height;
      }

      $popup.style.left = `${left}px`;
      $popup.style.top = `${top}px`;
      $popup.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;

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
        postId: targetPostId,
        childrenIds: [],
        $parentLink: $link,
        $popup,
        hover: true,
      };

      const popupCloseTimeout = 1000;

      const linkMouseLeave = (e: Event) => {
        const popupId = +$popup.getAttribute('data-popup-id');
        const popup = this.popups[popupId];
        if (!popup) {
          $link.removeEventListener('mouseleave', linkMouseLeave);
          return;
        }

        popup.hover = false;

        setTimeout(() => {
          if (checkPopup(popup)) {
            $link.removeEventListener('mouseleave', linkMouseLeave);
          }
        }, popupCloseTimeout);
      };

      $link.addEventListener('mouseleave', linkMouseLeave);

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
            $link.removeEventListener('mouseleave', linkMouseLeave);
          }
        }, popupCloseTimeout);
      });
    };

    if (settings.common.showPostPopups) {
      document.addEventListener('mouseover', e => {
        const $target = e.target as HTMLElement;
        if ($target.tagName === 'A'
          && ($target.classList.contains('post__reference-link')
            || $target.classList.contains('post__refmap-link'))) {
          $target.setAttribute('data-hover', 'true');

          const onMouseLeave = (e: MouseEvent) => {
            $target.removeAttribute('data-hover');
            $target.removeEventListener('mouseleave', onMouseLeave);
          };
          $target.addEventListener('mouseleave', onMouseLeave);

          setTimeout(() => {
            if ($target.hasAttribute('data-hover')) {
              openPopup($target);
            }
          }, 100);
        }
      });
    }
  }

  protected checkHidden($post: HTMLElement) {
    const hidden = SettingsManager.load().common.hiddenPosts;

    const $name = DOM.qs('.post-header__name', $post);
    const $tripcode = DOM.qs('.post-header__tripcode', $post);

    const name = $name ? $name.textContent : '';
    const tripcode = $tripcode ? $tripcode.textContent : '';

    if (hidden.some(author => author.name === name && author.tripcode === tripcode)) {
      $post.classList.add('post--hidden');
    }
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

      this.checkHidden($post);
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

        post.classList.add('post--own-reply');
        link.classList.add('post__reference-link--own-reply');
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

        const $name = DOM.qs('.post-header__name', post);
        const $tripcode = DOM.qs('.post-header__tripcode', post);

        const name = $name ? $name.textContent : '';
        const tripcode = $tripcode ? $tripcode.textContent : '';

        const hidden = SettingsManager.load().common.hiddenPosts;
        if (hidden.some(author => author.name === name && author.tripcode === tripcode)) {

          $reflink.classList.add('post__refmap-link--hidden');
        }

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
      .map(url => {
        return url.match(/^https?:\/\/(?:www\.)?(coub\.com)\/view\/([0-9a-z]+)$/i)
          || url.match(/^https?:\/\/(?:www\.)?(youtube\.com)\/watch\?v=([0-9a-z_-]+)$/i)
          || url.match(/^https?:\/\/(?:www\.)?(youtu\.be)\/([0-9a-z_-]+)$/i);
      })
      .filter(matches => matches && matches.length >= 1)
      .forEach(async matches => {
        if (matches[1] === 'coub.com') {
          try {
            const coub = await Coub.getData(matches[2]);
            const thumbnailUrl = coub.image_versions.template.replace('%{version}', 'small');
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('post__file-preview', 'file');
            thumbnail.innerHTML = `
<div class="post__file-info file-info">
  <a class="file-info__link" href="https://coub.com/view/${coub.permalink}" target="_blank">Coub</a>
  <span class="file-info__size"></span>
</div>

<span class="file__hide fas fa-window-close" title="Hide preview"></span>
<span class="file__show far fa-plus-square hidden" title="Show hidden preview"></span>

<a class="file__thumbnail thumbnail thumbnail--embed" href="https://coub.com/view/${coub.permalink}" target="_blank">
  <img class="thumbnail__content thumbnail__content--embed" src="${thumbnailUrl}" />
</a>`;
            thumbnail.style.maxHeight = '250px';
            thumbnail.style.maxWidth = '250px';
            postContent.insertBefore(thumbnail, postMessage);

            if (DOM.qsa('.post__file-preview', postContent).length > 1) {
              const message = DOM.qs('.post__message', postContent) as HTMLElement;
              message.style.clear = 'both';
            }

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
        } else if (matches[1] === 'youtube.com' || matches[1] === 'youtu.be') {
          try {
            const id = matches[2];
            const embedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}`;
            const dataUrl = `${window.baseUrl}/api/embed?url=${encodeURIComponent(embedUrl)}`;
            const response = await fetch(dataUrl, {
              credentials: 'same-origin',
            });

            if (response.status !== 200) {
              throw new Error(response.statusText);
            }

            const url = `https://www.youtube.com/watch?v=${id}`;
            const embedInfo = await response.json();
            const thumbnailUrl = embedInfo.thumbnail_url;
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('post__file-preview', 'file');
            thumbnail.innerHTML = `
<div class="post__file-info file-info">
  <a class="file-info__link" href="${url}" target="_blank">YouTube</a>
  <span class="file-info__size"></span>
</div>

<span class="file__hide fas fa-window-close" title="Hide preview"></span>
<span class="file__show far fa-plus-square hidden" title="Show hidden preview"></span>

<a class="file__thumbnail thumbnail thumbnail--embed" href="${url}" target="_blank">
  <img class="thumbnail__content thumbnail__content--embed" src="${thumbnailUrl}" />
</a>`;
            thumbnail.style.maxHeight = '250px';
            thumbnail.style.maxWidth = '250px';
            postContent.insertBefore(thumbnail, postMessage);

            if (DOM.qsa('.post__file-preview', postContent).length > 1) {
              const message = DOM.qs('.post__message', postContent) as HTMLElement;
              message.style.clear = 'both';
            }

            const postId = +$post.getAttribute('data-post-id');
            const html = embedInfo.html
              .replace(/src="([^"]+)"/i, 'src="$1&autoplay=1"')
              .replace(/width="\d+"/i, 'width="100%"')
              .replace(/height="\d+"/i, 'height="100%"');
            if (!this.media.find(file => file.postId === postId && file.url === url)) {
              this.media.push({
                postId,
                type: 'youtube',
                url,
                width: embedInfo.thumbnail_width,
                height: embedInfo.thumbnail_height,
                data: html,
              });
            }

            this.media.sort((a, b) => a.postId - b.postId);
          } catch (e) {
            console.warn(`Can\'t load youtube video '${matches[0]}':`, e);
          }
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

    if (file.type === 'image') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__content modal__content--image">
  <img class="modal__image" src="${file.url}" />
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal);
      this.modal.show(left, top, width, height, () => {
        this.$modal.remove();
        this.modal = null;
        this.modalFileIndex = null;
      });
    } else if (file.type === 'audio') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div class="modal__content modal__content--audio">
  <audio class="modal__audio" src="${file.url}"
    autoplay="true" loop="true" preload="none" controls="true">
  </audio>
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal);
      this.modal.show(left, top, 300, 50, () => {
        this.$modal.remove();
        this.modal = null;
        this.modalFileIndex = null;
      });
    } else if (file.type === 'video') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__content modal__content--video">
  <div class="player">
    <video class="player__video" src="${file.url}"
      autoplay="true" loop="true" preload="none">
    </video>

    <div class="player__controls">
      <button class="player__play hidden">
        <span class="fas fa-play"></span>
      </button>

      <button class="player__pause">
        <span class="fas fa-pause"></span>
      </button>

      <input type="range" class="player__seek"
        value="0" min="0" max="1" step="0.001" />

      <button class="player__mute">
        <span class="fas fa-volume-up"></span>
      </button>

      <button class="player__unmute hidden">
        <span class="fas fa-volume-mute"></span>
      </button>

      <input type="range" class="player__volume"
        value="1" min="0" max="1" step="0.01" />

      <button class="player__expand">
        <span class="fas fa-expand"></span>
      </button>

      <button class="player__compress hidden">
        <span class="fas fa-compress"></span>
      </button>
    </div>
  </div>
</div>`;
      this.$layout.appendChild(this.$modal);

      const $player = DOM.qs('.player', this.$modal);
      this.player = new VideoPlayer($player);

      this.modal = new Modal(this.$modal);
      this.modal.show(left, top, width, height, () => {
        this.player.setPlaying(false);
        this.player = null;

        this.$modal.remove();
        this.modal = null;
        this.modalFileIndex = null;
      });
    } else if (file.type === 'coub') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div id="embed-modal_content" class="modal__content modal__content--embed">
  ${await Coub.getHtml(file.url)}
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal, false);
      this.modal.show(left, top, width, height, () => {
        this.$modal.remove();
        this.modal = null;
        this.modalFileIndex = null;
      });
    } else if (file.type === 'youtube') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div id="embed-modal_content" class="modal__content modal__content--embed">
  ${file.data}
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal, false);
      this.modal.show(left, top, width, height, () => {
        this.$modal.remove();
        this.modal = null;
        this.modalFileIndex = null;
      });
    }
  }

  protected closeModals = () => {
    if (this.modal) {
      this.modal.hide();
    }
  };
}
