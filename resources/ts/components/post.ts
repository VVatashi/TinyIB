import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './modal';
import { VideoPlayer } from '@vvatashi/video-player';
import { eventBus, Events } from '..';
import { HotKeys } from '../hotkeys';
import { LocalStorage } from '../local-storage';
import { Coub } from '../services';
import { store, setOption } from '../store';
import { DOM } from '../utils';

interface FileData {
  $post: HTMLElement;
  $link: HTMLAnchorElement;
  postId: number;
  type: 'image' | 'audio' | 'video' | 'coub' | 'oembed' | 'youtube';
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
  pinned: boolean;
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

  protected readonly media: FileData[] = [];
  protected readonly ownPostIds: number[] = [];

  protected modalFileIndex: number = null;
  protected modalParentPopupId: number = null;

  protected nextPopupId = 0;
  protected popups: { [key: number]: PostPopup } = {};

  protected currentPostId = 0;

  protected autoPlayNextVideo = false;

  constructor() {
    eventBus.on(Events.Ready, this.onReady.bind(this));
    eventBus.on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  protected hideFile($file: HTMLElement) {
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

  protected showFile($file: HTMLElement) {
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

  protected showPrevMedia() {
    const prevIndex = this.modalFileIndex > 0
      ? this.modalFileIndex - 1 : this.media.length - 1;

    const $post = DOM.qid(`reply_${this.media[prevIndex].postId}`);
    if ($post) {
      this.currentPostId = +$post.getAttribute('data-post-id');
      this.markCurrentPost();
      DOM.scrollToMiddle($post);
    }

    this.showMediaModal(prevIndex);
  }

  protected showNextMedia() {
    const nextIndex = this.modalFileIndex < this.media.length - 1
      ? this.modalFileIndex + 1 : 0;

    const $post = DOM.qid(`reply_${this.media[nextIndex].postId}`);
    if ($post) {
      this.currentPostId = +$post.getAttribute('data-post-id');
      this.markCurrentPost();
      DOM.scrollToMiddle($post);
    }

    this.showMediaModal(nextIndex);
  }

  protected showNextVideo() {
    // Search after current file
    let index = this.modalFileIndex;
    for (let i = this.modalFileIndex + 1; i < this.media.length; ++i) {
      if (this.media[i].type === 'video') {
        index = i;
        break;
      }
    }

    if (index === this.modalFileIndex) {
      // Search before current file
      for (let i = 0; i < this.modalFileIndex; ++i) {
        if (this.media[i].type === 'video') {
          index = i;
          break;
        }
      }
    }

    const $post = DOM.qid(`reply_${this.media[index].postId}`);
    if ($post) {
      DOM.scrollToMiddle($post);
    }

    this.showMediaModal(index);
  }

  protected onReady() {
    this.$layout = DOM.qs('.layout') as HTMLElement;
    const { settings } = store.getState().settings;

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      const { hotKeys } = store.getState().hotKeys;
      if (HotKeys.check(hotKeys['closeMedia'], e)) {
        e.preventDefault();
        this.closeModals();
        return false;
      } else if (this.modalFileIndex !== null && HotKeys.check(hotKeys['previousMedia'], e)) {
        e.preventDefault();
        this.showPrevMedia();
        return false;
      } else if (this.modalFileIndex !== null && HotKeys.check(hotKeys['nextMedia'], e)) {
        e.preventDefault();
        this.showNextMedia();
        return false;
      } else if (HotKeys.check(hotKeys['previousPost'], e)) {
        e.preventDefault();
        this.selectPrevPost();
        return false;
      } else if (HotKeys.check(hotKeys['nextPost'], e)) {
        e.preventDefault();
        this.selectNextPost();
        return false;
      } else if (HotKeys.check(hotKeys['reply'], e)) {
        e.preventDefault();
        const $post = this.getCurrentPost();
        if ($post) {
          const $reflink = DOM.qs('[data-reflink]', $post) as HTMLElement;
          if ($reflink) {
            $reflink.click();
          }
        }
        return false;
      } else if (HotKeys.check(hotKeys['toggleHide'], e)) {
        e.preventDefault();
        const $post = this.getCurrentPost();
        if ($post) {
          const $hide = DOM.qs('.post-header__hide', $post) as HTMLElement;
          if ($hide) {
            $hide.click();
          }
        }
        return false;
      } else if (HotKeys.check(hotKeys['toggleFile'], e)) {
        e.preventDefault();

        const $post = this.getCurrentPost();
        if (!$post) {
          return;
        }

        const $link = DOM.qs('.file__thumbnail', $post) as HTMLAnchorElement;
        if (!$link) {
          return;
        }

        const link = $link.getAttribute('href');
        const expandMode = settings.image.expandImages;
        if (expandMode === 'tab') {
          window.open(link);
          return;
        }

        if (this.modalFileIndex !== null && this.media[this.modalFileIndex].url === link) {
          this.closeModals();
        } else if (expandMode === 'post') {
          const $close = DOM.qs('[data-close-original]', $post) as HTMLElement;
          if ($close) {
            $close.click();
          } else {
            const index = this.media.findIndex(file => file.url === link);
            if (index !== -1) {
              this.showFileInPost(index);
            }
          }
        } else if (expandMode === 'popup') {
          if ($post.hasAttribute('data-popup-id')) {
            this.modalParentPopupId = +$post.getAttribute('data-popup-id');
          }

          const index = this.media.findIndex(file => file.url === link);
          if (index !== -1) {
            this.showMediaModal(index);
          }
        }

        return false;
      } else if (HotKeys.check(hotKeys['toggleSettings'], e)) {
        e.preventDefault();
        const $settings = DOM.qid('tools-toggle-settings');
        if ($settings) {
          $settings.click();
        }
        return false;
      }
    };

    document.addEventListener('keydown', onKeyDown, true);

    const $navigateLeft = DOM.qid('navigation-left');
    if ($navigateLeft) {
      $navigateLeft.addEventListener('click', e => {
        e.preventDefault();
        this.showPrevMedia();
        return false;
      });
    }

    const $navigateRight = DOM.qid('navigation-right');
    if ($navigateRight) {
      $navigateRight.addEventListener('click', e => {
        e.preventDefault();
        this.showNextMedia();
        return false;
      });
    }

    const $autoplay = DOM.qid('navigation-autoplay');
    if ($autoplay) {
      $autoplay.addEventListener('click', e => {
        e.preventDefault();

        this.autoPlayNextVideo = !this.autoPlayNextVideo;
        if (this.autoPlayNextVideo) {
          $autoplay.classList.add('button--active');
        } else {
          $autoplay.classList.remove('button--active');
        }

        return false;
      });
    }

    document.addEventListener('click', (e: MouseEvent) => {
      if (e.button !== 0) {
        return;
      }

      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (e.target.tagName === 'A' && e.target.classList.contains('thumbnail')
        || e.target.tagName === 'IMG' && e.target.classList.contains('thumbnail__content')) {
        const expandMode = settings.image.expandImages;
        if (expandMode === 'tab') {
          return;
        }

        const $link = (e.target.tagName === 'A' ? e.target : e.target.parentElement) as HTMLAnchorElement;
        const link = $link.getAttribute('href');

        if (link.endsWith('.webp') && !window.hasWebpSupport) {
          return;
        }

        e.preventDefault();

        if (this.modalFileIndex !== null && this.media[this.modalFileIndex].url === link) {
          this.closeModals();
        } else if (expandMode === 'post') {
          const index = this.media.findIndex(file => file.url === link);
          if (index !== -1) {
            this.showFileInPost(index);
          }
        } else if (expandMode === 'popup') {
          const $post = $link.closest('.post');
          if ($post.hasAttribute('data-popup-id')) {
            this.modalParentPopupId = +$post.getAttribute('data-popup-id');
          }

          const index = this.media.findIndex(file => file.url === link);
          if (index !== -1) {
            this.showMediaModal(index);
          }
        }

        return false;
      } else if (settings.image.hidePopupOnOutsideClick) {
        if ((e.target as HTMLElement).closest('.video-player__controls')) {
          return;
        }

        if (this.modal && !this.modal.isDragging) {
          this.modal.hide();
        }
      }

      if (e.target.classList.contains('file__hide')) {
        const $file = e.target.closest('.file') as HTMLElement;
        if (!$file) {
          return;
        }

        const hash = $file.getAttribute('data-hash');
        if (hash) {
          const hiddenFiles = [...settings.filter.hiddenFiles || []];
          hiddenFiles.push(hash);
          store.dispatch(setOption('filter.hiddenFiles', hiddenFiles));
        }

        this.hideFile($file);
      }

      if (e.target.classList.contains('file__show')) {
        const $file = e.target.closest('.file') as HTMLElement;
        if (!$file) {
          return;
        }

        const hash = $file.getAttribute('data-hash');
        if (hash) {
          const hiddenFiles = (settings.filter.hiddenFiles || []).filter(h => h !== hash);
          store.dispatch(setOption('filter.hiddenFiles', hiddenFiles));
        }

        this.showFile($file);
      }
    });

    if (settings.link.showPostPopups) {
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
              this.openPostPopup($target);
            }
          }, 100);
        }
      });
    }
  }

  protected checkHidden($post: HTMLElement) {
    const { settings } = store.getState().settings;
    const hiddenPosts = settings.filter.hiddenPosts || [];
    const id = +$post.getAttribute('data-post-id');
    if (hiddenPosts.indexOf(id) !== -1) {
      $post.classList.add('post--hidden');
    } else {
      const hidden = settings.filter.hiddenAuthors || [];

      const $name = DOM.qs('.post-header__name', $post);
      const $tripcode = DOM.qs('.post-header__tripcode', $post);

      const name = $name ? $name.textContent : '';
      const tripcode = $tripcode ? $tripcode.textContent : '';

      if (hidden.some((author: { name: string, tripcode: string }) =>
        author.name === name && author.tripcode === tripcode)) {
        $post.classList.add('post--hidden');
      }
    }
  }

  protected onPostsInserted(posts: HTMLElement[]) {
    const { settings } = store.getState().settings;
    const hiddenFiles = settings.filter.hiddenFiles || [];
    posts.forEach($post => {
      const $fileLink = DOM.qs('.thumbnail', $post) as HTMLAnchorElement;
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
            $post,
            $link: $fileLink,
            postId,
            type,
            url,
            width: +$fileLink.getAttribute('data-width'),
            height: +$fileLink.getAttribute('data-height'),
          } as FileData);
        }

        const $file = DOM.qs('.file', $post) as HTMLElement;
        if ($file) {
          const hash = $file.getAttribute('data-hash');
          if (hash && hiddenFiles.indexOf(hash) !== -1) {
            this.hideFile($file);
          }
        }

        // Replace thumbnail with original.
        if (type === 'image') {
          const $thumbnail = DOM.qs('.thumbnail__content', $fileLink) as HTMLImageElement;
          if (!url.endsWith('.gif') && settings.image.replaceThumbnail) {
            $thumbnail.src = $fileLink.href;
          } else if (url.endsWith('.gif') && settings.image.replaceThumbnailGif) {
            $thumbnail.src = $fileLink.href;
          }
        }
      }

      this.checkHidden($post);
      this.processReplies($post);
      this.processOEmbedLinks($post);
    });
  }

  protected processReplies(post: HTMLElement) {
    const { settings } = store.getState().settings;
    const name = LocalStorage.get('user.name', '')
      + LocalStorage.get('user.tripcode', '');

    const postNameEl = DOM.qs('.post-header__name', post);
    const postTripcodeEl = DOM.qs('.post-header__tripcode', post);
    const postName = (postNameEl ? postNameEl.textContent : '')
      + (postTripcodeEl ? postTripcodeEl.textContent : '');

    const postId = +post.getAttribute('data-post-id');
    if (name.length && postName.indexOf(name) !== -1) {
      this.ownPostIds.push(postId);
    }

    const links = DOM.qsa('.post__reference-link', post);
    links.forEach(link => {
      const targetId = +link.getAttribute('data-target-post-id');
      if (this.ownPostIds.indexOf(targetId) !== -1) {
        if (settings.link.addYouToLinks) {
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

        const hidden = settings.filter.hiddenAuthors || [];
        if (hidden.some((author: { name: string, tripcode: string }) =>
          author.name === name && author.tripcode === tripcode)) {
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
    const { settings } = store.getState().settings;
    const postContent = DOM.qs('.post__content', $post);
    if (!postContent) {
      return;
    }

    const hiddenFiles = settings.filter.hiddenFiles || [];
    const postMessage = DOM.qs('.post__message', $post);
    const links = DOM.qsa('a[href]', postMessage) as HTMLAnchorElement[];
    links.filter(link => !link.hasAttribute('data-processed'))
      .map($link => {
        $link.setAttribute('data-processed', 'true');

        const url = $link.getAttribute('href');
        const matches = url.match(/^https?:\/\/(?:www\.)?(coub\.com)\/view\/([0-9a-z]+)$/i)
          || url.match(/^https?:\/\/(?:www\.)?(tiktok\.com)\/@([0-9a-z_-]+)\/video\/(\d+)/i)
          || url.match(/^https?:\/\/(?:www\.)?(youtube\.com)\/watch\?v=([0-9a-z_-]+)/i)
          || url.match(/^https?:\/\/(?:www\.)?(youtu\.be)\/([0-9a-z_-]+)/i);
        return { $link, url, matches };
      })
      .filter(({ $link, url, matches }) => matches && matches.length >= 1)
      .forEach(async ({ $link, url, matches }) => {
        if (matches[1] === 'coub.com') {
          try {
            const coub = await Coub.getData(matches[2]);
            const thumbnailUrl = coub.image_versions.template.replace('%{version}', 'small');
            const $thumbnail = document.createElement('div');
            $thumbnail.classList.add('post__file-preview', 'file');
            $thumbnail.setAttribute('data-hash', coub.permalink);
            $thumbnail.innerHTML = `
<div class="post__file-info file-info">
  <a class="file-info__link" href="https://coub.com/view/${coub.permalink}" target="_blank">Coub</a>
  <span class="file-info__size"></span>
</div>

<span class="file__hide fas fa-window-close" title="Hide preview"></span>
<span class="file__show far fa-plus-square hidden" title="Show hidden preview"></span>

<a class="file__thumbnail thumbnail thumbnail--embed" href="https://coub.com/view/${coub.permalink}" target="_blank">
  <img class="thumbnail__content thumbnail__content--embed"
    style="max-width: 250px; max-height: 250px;"
    src="${thumbnailUrl}" />
</a>`;
            postContent.insertBefore($thumbnail, postMessage);
            $link.innerHTML = `<span class="fas fa-cube"></span> ${coub.title}`;

            if (hiddenFiles.indexOf(coub.permalink) !== -1) {
              this.hideFile($thumbnail);
            }

            if (DOM.qsa('.post__file-preview', postContent).length > 1) {
              const message = DOM.qs('.post__message', postContent) as HTMLElement;
              message.style.clear = 'both';
            }

            const postId = +$post.getAttribute('data-post-id');
            const url = `https://coub.com/view/${coub.permalink}`;
            if (!this.media.find(file => file.postId === postId && file.url === url)) {
              this.media.push({
                $post,
                $link: DOM.qs('.thumbnail', $thumbnail) as HTMLAnchorElement,
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
        } else if (matches[1] === 'tiktok.com') {
          try {
            const originalUrl = `https://www.tiktok.com/@${matches[2]}/video/${matches[3]}`;
            const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(originalUrl)}`;
            const oembedResponse = await fetch(oembedUrl, { credentials: 'same-origin' });
            const oembed = await oembedResponse.json();
            const thumbnailUrl = oembed.thumbnail_url;
            const $thumbnail = document.createElement('div');
            $thumbnail.classList.add('post__file-preview', 'file');
            $thumbnail.setAttribute('data-hash', originalUrl);
            $thumbnail.innerHTML = `
<div class="post__file-info file-info">
  <a class="file-info__link" href="${originalUrl}" target="_blank">TikTok</a>
  <span class="file-info__size"></span>
</div>

<span class="file__hide fas fa-window-close" title="Hide preview"></span>
<span class="file__show far fa-plus-square hidden" title="Show hidden preview"></span>

<a class="file__thumbnail thumbnail thumbnail--embed" href="${originalUrl}" target="_blank">
  <img class="thumbnail__content thumbnail__content--embed"
    style="max-width: 250px; max-height: 250px;"
    src="${thumbnailUrl}" />
</a>`;
            postContent.insertBefore($thumbnail, postMessage);
            $link.innerHTML = `<span class="fab fa-tiktok"></span> ${oembed.title}`;

            if (hiddenFiles.indexOf(originalUrl) !== -1) {
              this.hideFile($thumbnail);
            }

            if (DOM.qsa('.post__file-preview', postContent).length > 1) {
              const message = DOM.qs('.post__message', postContent) as HTMLElement;
              message.style.clear = 'both';
            }

            const postId = +$post.getAttribute('data-post-id');
            if (!this.media.find(file => file.postId === postId && file.url === url)) {
              this.media.push({
                $post,
                $link: DOM.qs('.thumbnail', $thumbnail) as HTMLAnchorElement,
                postId,
                type: 'oembed',
                url: originalUrl,
                width: oembed.thumbnail_width,
                height: oembed.thumbnail_height,
                data: oembed.html,
              });
            }

            this.media.sort((a, b) => a.postId - b.postId);
          } catch (e) {
            console.warn(`Can\'t load oembed '${matches[0]}':`, e);
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

            const timeMatch = url.match(/(?:\?|\&)t=([1-9][0-9]*)/);
            const time = timeMatch ? +timeMatch[1] : 0;

            const videoURL = time
              ? `https://www.youtube.com/watch?v=${id}&t=${time}`
              : `https://www.youtube.com/watch?v=${id}`;

            const embedInfo = await response.json();
            const thumbnailUrl = embedInfo.thumbnail_url;
            const $thumbnail = document.createElement('div');
            $thumbnail.classList.add('post__file-preview', 'file');
            $thumbnail.setAttribute('data-hash', id);
            $thumbnail.innerHTML = `
<div class="post__file-info file-info">
  <a class="file-info__link" href="${videoURL}" target="_blank">YouTube</a>
  <span class="file-info__size"></span>
</div>

<span class="file__hide fas fa-window-close" title="Hide preview"></span>
<span class="file__show far fa-plus-square hidden" title="Show hidden preview"></span>

<a class="file__thumbnail thumbnail thumbnail--embed" href="${videoURL}" target="_blank">
  <img class="thumbnail__content thumbnail__content--embed"
    style="max-width: 250px; max-height: 250px;"
    src="${thumbnailUrl}" />
</a>`;
            postContent.insertBefore($thumbnail, postMessage);
            $link.innerHTML = `<span class="fab fa-youtube"></span> ${embedInfo.title}`;

            if (hiddenFiles.indexOf(id) !== -1) {
              this.hideFile($thumbnail);
            }

            if (DOM.qsa('.post__file-preview', postContent).length > 1) {
              const message = DOM.qs('.post__message', postContent) as HTMLElement;
              message.style.clear = 'both';
            }

            const postId = +$post.getAttribute('data-post-id');
            const html = embedInfo.html
              .replace(/src="([^"]+)"/i, `src="$1&autoplay=0&start=${time}"`)
              .replace(/width="\d+"/i, 'width="100%"')
              .replace(/height="\d+"/i, 'height="100%"');
            if (!this.media.find(file => file.postId === postId && file.url === videoURL)) {
              this.media.push({
                $post,
                $link: DOM.qs('.thumbnail', $thumbnail) as HTMLAnchorElement,
                postId,
                type: 'youtube',
                url: videoURL,
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
    const { settings } = store.getState().settings;

    const nsfwClass = 'layout--nsfw';
    if (settings.image.nsfw) {
      this.$layout.classList.add(nsfwClass);
    } else {
      this.$layout.classList.remove(nsfwClass);
    }

    store.dispatch(setOption('image.nsfw', !settings.image.nsfw));
  }

  protected async showMediaModal(mediaIndex: number) {
    const { settings } = store.getState().settings;
    const modalParentPopupId = this.modalParentPopupId;
    this.closeModals();

    if (modalParentPopupId !== null) {
      this.modalParentPopupId = modalParentPopupId;
    }

    this.modalFileIndex = mediaIndex;
    const file = this.media[mediaIndex];

    const $navigationPanels = DOM.qsa('.navigation');
    $navigationPanels.forEach($panel => $panel.classList.remove('hidden'));

    const $autoplay = DOM.qid('navigation-autoplay');
    if ($autoplay) {
      if (file.type === 'video') {
        $autoplay.classList.remove('hidden');
      } else {
        $autoplay.classList.add('hidden');
      }
    }

    const scale = Math.max(
      file.width / window.innerWidth,
      file.height / window.innerHeight
    );

    const width = scale <= 1 ? file.width : file.width / scale;
    const height = scale <= 1 ? file.height : file.height / scale;

    const left = Math.round(window.innerWidth / 2 - width / 2);
    const top = Math.round(window.innerHeight / 2 - height / 2);

    const onModalHide = () => {
      this.$modal.remove();
      this.modal = null;
      this.modalFileIndex = null;

      if (this.modalParentPopupId !== null) {
        setTimeout(() => {
          const popup = this.popups[this.modalParentPopupId];
          if (popup) {
            this.checkPostPopup(popup);
          }
        }, 100);

        this.modalParentPopupId = null;
      }

      const $navigationPanels = DOM.qsa('.navigation');
      $navigationPanels.forEach($panel => $panel.classList.add('hidden'));
    }

    const autoPlay = settings.image.autoPlay;

    if (file.type === 'image') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__content modal__content--image">
  <img class="modal__image" src="${file.url}" />
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal);
      this.modal.show(left, top, width, height, onModalHide.bind(this));
    } else if (file.type === 'audio') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div class="modal__content modal__content--audio">
  <audio class="modal__audio" ${autoPlay ? 'autoplay="true"' : ''} loop="true" preload="metadata" controls="true">
    <source src="${file.url}">
  </audio>
</div>`;
      this.$layout.appendChild(this.$modal);

      const $audio = DOM.qs('.modal__audio', this.$modal) as HTMLAudioElement;
      $audio.volume = LocalStorage.get('player.volume', 1);

      $audio.addEventListener('volumechange', e => {
        LocalStorage.set('player.volume', $audio.volume);
      });

      this.modal = new Modal(this.$modal);
      this.modal.show(left - 150, top - 25, 300, 50, onModalHide.bind(this));
    } else if (file.type === 'video') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__content modal__content--video">
  <div id="player"></div>
</div>`;
      this.$layout.appendChild(this.$modal);

      const $player = DOM.qs('#player', this.$modal);
      const Player = React.createElement(VideoPlayer, {
        autoplay: autoPlay,
        loop: true,
        src: file.url,
        defaultVolume: +LocalStorage.get('player.volume', 1),
        onVolumeChanged: (volume: number) => {
          LocalStorage.set('player.volume', volume);
        },
        onEnded: () => {
          if (this.autoPlayNextVideo) {
            this.showNextVideo();
          }
        },
      });
      ReactDOM.render(Player, $player);

      const video = $player.querySelector('.video-player') as HTMLElement;
      video.focus();

      this.modal = new Modal(this.$modal);
      this.modal.show(left, top, width, height, () => {
        ReactDOM.unmountComponentAtNode($player);
        onModalHide();
      });
    } else if (file.type === 'coub') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div id="embed-modal_content" class="modal__content modal__content--embed">
  ${await Coub.getHtml(file.url, autoPlay)}
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal, false);
      this.modal.show(left, top, width, height, onModalHide.bind(this));
    } else if (file.type === 'oembed') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal', 'modal_oembed');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div id="embed-modal_content" class="modal__content modal__content--embed">
  ${file.data}
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal, false);
      this.modal.show(left, top, width, height, onModalHide.bind(this), (width) => width >= 325 && width <= 605);

      const existingScript = document.querySelector('[data-tiktok-loader]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.setAttribute('data-tiktok-loader', 'true');
      document.head.appendChild(script);
    } else if (file.type === 'youtube') {
      this.$modal = document.createElement('div');
      this.$modal.classList.add('modal');
      this.$modal.innerHTML = `
<div class="modal__header">
</div>

<div id="embed-modal_content" class="modal__content modal__content--embed">
  ${file.data.replace('autoplay=0', 'autoplay=' + (autoPlay ? 1 : 0))}
</div>`;
      this.$layout.appendChild(this.$modal);

      this.modal = new Modal(this.$modal, false);
      this.modal.show(left, top, width, height, onModalHide.bind(this));
    }
  }

  protected closeModals = () => {
    if (this.modal) {
      this.modal.hide();
    }
  };

  protected async openPostPopup($link: HTMLElement) {
    const targetPostId = +$link.getAttribute('data-target-post-id');
    if (!targetPostId) {
      return;
    }

    const $parentPost = $link.closest('.post');
    const parentPostId = +$parentPost.getAttribute('data-post-id');

    let $targetPost = DOM.qs(`#reply_${targetPostId}`);
    let $postContent;
    if ($targetPost) {
      $postContent = DOM.qs('.post__inner', $targetPost);
    } else {
      // Try fetch post.
      const response = await fetch(`${window.baseUrl}/ajax/post/${targetPostId}`, {
        credentials: 'same-origin',
      });

      if (response.status !== 200) {
        return;
      }

      const html = await response.text();
      $targetPost = document.createElement('div');
      $targetPost.classList.add('hidden');
      $targetPost.insertAdjacentHTML('beforeend', html);

      this.$layout.appendChild($targetPost);

      $postContent = DOM.qs('.post__inner', $targetPost);
    }

    let parentId: number = null;
    if ($parentPost.hasAttribute('data-popup-id')) {
      parentId = +$parentPost.getAttribute('data-popup-id');
    }

    const isAlreadyOpen = Object.keys(this.popups)
      .map(key => this.popups[+key])
      .filter(popup => popup.postId === targetPostId && popup.parentId === parentId)
      .length;
    if (isAlreadyOpen) {
      return;
    }

    $link.setAttribute('data-has-popup', 'true');

    const $popup = document.createElement('div');
    $popup.setAttribute('data-post-id', targetPostId.toString());
    $popup.classList.add('post', 'post_reply', 'post--popup', 'fade', 'faded');
    $popup.style.position = 'absolute';
    $popup.style.maxWidth = '60%';

    if ($targetPost && $targetPost.classList.contains('post--deleted')) {
      $popup.classList.add('post--deleted');
    }

    const $postContentCopy = $postContent.cloneNode(true);
    $popup.appendChild($postContentCopy);

    const $buttonsWrapper = DOM.qs('.post-header__reflink-wrapper', $popup);
    const $postNo = DOM.qs('.post-header__post-no', $buttonsWrapper);
    const $pinButton = document.createElement('a');
    $pinButton.classList.add('post-header__pin', 'fas', 'fa-thumbtack');
    $pinButton.href = '#';
    $pinButton.title = 'Pin popup';
    $buttonsWrapper.insertBefore($pinButton, $postNo);

    this.$layout.appendChild($popup);

    const backLinks = DOM.qsa(`a[data-target-post-id="${parentPostId}"]`, $popup) as HTMLElement[];
    backLinks.forEach(link => link.classList.add('backlink'));

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

    $pinButton.addEventListener('click', e => {
      e.preventDefault();

      if (!this.popups[popupId]) {
        return;
      }

      const popup = this.popups[popupId];
      const $popup = popup.$popup;
      popup.pinned = !popup.pinned;
      if (popup.pinned) {
        $popup.classList.add('post--pinned');
      } else {
        $popup.classList.remove('post--pinned');
      }
    });

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
      pinned: false,
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
        if (this.checkPostPopup(popup)) {
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
        if (this.checkPostPopup(popup)) {
          $link.removeEventListener('mouseleave', linkMouseLeave);
        }
      }, popupCloseTimeout);
    });
  }

  protected checkPostPopup(popup: PostPopup) {
    if (popup.hover) {
      return false;
    }

    // Do not close post popup if it is pinned.
    if (popup.pinned) {
      return false;
    }

    // Do not close post popup if file modal is open.
    if (this.modalParentPopupId === popup.id) {
      return false;
    }

    if (popup.$parentLink.hasAttribute('data-hover')) {
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

      // Do not close post popup if any of it's children is pinned.
      if (child.pinned) {
        return false;
      }

      // Do not close post popup if file modal for one of it's children is open.
      if (this.modalParentPopupId === child.id) {
        return false;
      }

      childrenIds.push(...child.childrenIds);
    }

    // Close popup if none of it's children has hover.
    popup.$parentLink.removeAttribute('data-has-popup');
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
          this.checkPostPopup(parent);
        }, 100);
      }
    }

    return true;
  }

  async showFileInPost(mediaIndex: number) {
    const { settings } = store.getState().settings;
    const file = this.media[mediaIndex];

    const $thumbnail = DOM.qs('.thumbnail__content', file.$link);
    $thumbnail.classList.add('hidden');

    const autoPlay = settings.image.autoPlay;
    let $original: HTMLElement;
    if (file.type === 'video') {
      $original = document.createElement('video');
      ($original as HTMLVideoElement).src = file.url;
      $original.setAttribute('autoplay', '');
      $original.setAttribute('controls', '');
      $original.setAttribute('width', $thumbnail.getAttribute('data-width'));
      $original.setAttribute('height', $thumbnail.getAttribute('data-height'));
    } else if (file.type === 'audio') {
      $original = document.createElement('audio');
      ($original as HTMLAudioElement).src = file.url;
      $original.setAttribute('autoplay', '');
      $original.setAttribute('controls', '');
    } else if (file.type === 'image') {
      $original = document.createElement('img');
      ($original as HTMLImageElement).src = file.url;
      $original.setAttribute('width', $thumbnail.getAttribute('data-width'));
      $original.setAttribute('height', $thumbnail.getAttribute('data-height'));
    } else if (file.type === 'coub') {
      $original = document.createElement('div');
      $original.innerHTML = await Coub.getHtml(file.url, autoPlay);
    } else if (file.type === 'oembed') {
      $original = document.createElement('div');
      $original.innerHTML = file.data;
    } else if (file.type === 'youtube') {
      $original = document.createElement('div');
      $original.innerHTML = file.data.replace('autoplay=0', 'autoplay=' + (autoPlay ? 1 : 0));
    }

    if (file.type !== 'audio') {
      const maxWidth = Math.min(window.innerWidth, 900, file.width);
      const maxHeight = file.height * maxWidth / file.width;

      $original.style.width = `${maxWidth}px`;
      $original.style.height = `${maxHeight}px`;
    }

    file.$link.appendChild($original);

    const $close = document.createElement('a');
    $close.href = '#';
    $close.textContent = '(Close)';
    $close.setAttribute('data-close-original', '');

    file.$link.parentElement.appendChild($close);

    const onCloseClick = (e: Event) => {
      e.preventDefault();

      $thumbnail.classList.remove('hidden');
      $original.remove();
      $close.remove();

      setTimeout(() => {
        DOM.scrollToMiddle($thumbnail);
      });

      return false;
    };

    $close.addEventListener('click', onCloseClick);

    if (file.type === 'image') {
      $original.addEventListener('click', onCloseClick);
    }

    setTimeout(() => {
      DOM.scrollToMiddle($original);
    });
  }

  protected isInView($el: Element) {
    const rect = $el.getBoundingClientRect();
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    return rect.top > 0 && rect.top < width && rect.left > 0 && rect.left < height;
  }

  protected findPostInView() {
    const $posts = DOM.qsa('.post');
    for (let i = 0; i < $posts.length; ++i) {
      if (this.isInView($posts[i])) {
        return $posts[i];
      }
    }

    return null;
  }

  protected getCurrentPost() {
    if (this.currentPostId) {
      return DOM.qs(`[data-post-id="${this.currentPostId}"]`);
    }

    return null;
  }

  protected markCurrentPost() {
    DOM.qsa('.post--current').forEach($post => $post.classList.remove('post--current'));
    const $currentPost = this.getCurrentPost();
    if ($currentPost) {
      $currentPost.classList.add('post--current');
    }
  }

  protected selectPrevPost() {
    let $currentPost = this.getCurrentPost();
    if (!$currentPost || !this.isInView($currentPost)) {
      $currentPost = this.findPostInView();
      if ($currentPost) {
        this.currentPostId = +$currentPost.getAttribute('data-post-id');
      }
    }

    const $posts = DOM.qsa('.post');
    const currentPostIndex = $posts.findIndex($post => $post === $currentPost);
    const prevPostIndex = currentPostIndex > 0 ? currentPostIndex - 1 : $posts.length - 1;
    const $prevPost = $posts[prevPostIndex];
    this.currentPostId = +$prevPost.getAttribute('data-post-id');
    this.markCurrentPost();
    DOM.scrollToMiddle($prevPost);
  }

  protected selectNextPost() {
    let $currentPost = this.getCurrentPost();
    if (!$currentPost || !this.isInView($currentPost)) {
      $currentPost = this.findPostInView();
      if ($currentPost) {
        this.currentPostId = +$currentPost.getAttribute('data-post-id');
      }
    }

    const $posts = DOM.qsa('.post');
    const currentPostIndex = $posts.findIndex($post => $post === $currentPost);
    const nextPostIndex = currentPostIndex < $posts.length - 1 ? currentPostIndex + 1 : 0;
    const $nextPost = $posts[nextPostIndex];
    this.currentPostId = +$nextPost.getAttribute('data-post-id');
    this.markCurrentPost();
    DOM.scrollToMiddle($nextPost);
  }
}
