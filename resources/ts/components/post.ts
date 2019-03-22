import { eventBus, Events } from '..';
import { DOM } from '../utils';
import Vue from 'vue';
import { draggable } from './draggable';
import { Modal } from './modal';

interface Coub {
  image_versions: {
    template: string;
  };

  permalink: string;
  title: string;
};

interface PopupData {
  hidden: boolean;
  type: 'coub';
  title: string;
  content: string;
}

type PopupViewModel = Vue & PopupData;

const ownPostIds: number[] = [];

export class Post {
  protected popupViewModel: PopupViewModel;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
    eventBus.$on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  protected onReady() {
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.classList.add('popup', 'hidden');
    document.body.insertBefore(popup, null);

    const imageModal = new Modal(DOM.qid('image-modal'));
    const videoModal = new Modal(DOM.qid('video-modal'));

    document.addEventListener('click', e => {
      if (e.button !== 0) {
        return;
      }

      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (e.target.tagName !== 'IMG') {
        return;
      }

      if (e.target.classList.contains('thumbnail__content')) {
        e.preventDefault();

        const $link = e.target.parentElement;
        const link = $link.getAttribute('href');

        const imageWidth = +$link.getAttribute('data-width');
        const imageHeight = +$link.getAttribute('data-height');

        const scale = Math.max(
          imageWidth / window.innerWidth,
          imageHeight / window.innerHeight
        );

        const width = scale <= 1 ? imageWidth : imageWidth / scale;
        const height = scale <= 1 ? imageHeight : imageHeight / scale;

        const left = Math.round(window.innerWidth / 2 - width / 2);
        const top = Math.round(window.innerHeight / 2 - height / 2);

        if (e.target.classList.contains('thumbnail__content--image')) {
          const $image = DOM.qs('#image-modal_content > img');
          if (imageModal.isOpened && $image.getAttribute('src') === link) {
            imageModal.hide();
          } else {
            $image.setAttribute('src', '');
            $image.setAttribute('src', link);

            videoModal.hide();
            imageModal.show(left, top, width, height, () => {
              $image.setAttribute('src', '');
            });
          }
        } else if (e.target.classList.contains('thumbnail__content--video')) {
          const $video = DOM.qs('#video-modal_content > video');
          if (videoModal.isOpened && $video.getAttribute('src') === link) {
            videoModal.hide();
          } else {
            $video.setAttribute('src', '');
            $video.setAttribute('src', link);

            imageModal.hide();
            videoModal.show(left, top, width, height, () => {
              ($video as HTMLVideoElement).pause();
              $video.setAttribute('src', '');
            });
          }
        }

        return false;
      }
    });

    const self = this;

    this.popupViewModel = new Vue({
      template: `
<div class="popup" id="popup" v-show="!hidden" ref="popup">
  <div class="popup__header" ref="header">
    <span class="popup__title">{{ title }}</span>

    <span class="popup__header-buttons">
      <span class="popup__close"
        v-on:click.stop="onCloseClick()"
        title="Close popup"></span>
    </span>
  </div>

  <div class="popup__body" v-html="content">
  </div>
</div>`,
      mixins: [draggable],
      el: '#popup',
      data(): PopupData {
        return {
          hidden: true,
          type: 'coub',
          title: null,
          content: null,
        };
      },
      methods: {
        getDragHandle(): HTMLElement {
          return this.$refs.header;
        },
        getDraggable(): HTMLElement {
          return this.$refs.popup;
        },
        onCloseClick() {
          self.closePopup();
        },
      },
    });
  }

  protected onPostsInserted(posts: HTMLElement[]) {
    posts.forEach(post => {
      this.processReplies(post);
      this.processOEmbedLinks(post);
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
      ownPostIds.push(postId);

      post.classList.add('post--own');
    }

    const links = DOM.qsa('.post__reference-link', post);
    links.forEach(link => {
      const targetId = +link.getAttribute('data-target-post-id');
      if (ownPostIds.indexOf(targetId) !== -1) {
        const youEl = document.createElement('span');
        youEl.classList.add('post__reference-link-author');
        youEl.innerHTML = '(You)';
        link.parentElement.insertBefore(youEl, link.nextSibling);

        post.classList.add('post--reply');
        link.classList.add('post__reference-link--reply');
      }
    });
  }

  protected async processOEmbedLinks(post: HTMLElement) {
    const postContent = DOM.qs('.post__content', post);
    if (!postContent) {
      return;
    }

    const postMessage = DOM.qs('.post__message', post);
    const links = DOM.qsa('a[href]', postMessage);
    links.filter(link => !link.hasAttribute('data-processed'))
      .map(link => {
        link.setAttribute('data-processed', 'true');
        return link.getAttribute('href');
      })
      .map(url => url.match('^https?:\/\/(?:www\.)?coub\.com\/view\/([0-9a-z]+)$'))
      .filter(matches => matches && matches.length >= 1)
      .forEach(async matches => {
        const coubUrl = `https://coub.com/api/v2/coubs/${matches[1]}`;
        const url = `${window.baseUrl}/api/embed?url=${encodeURIComponent(coubUrl)}`;

        try {
          const response = await fetch(url, {
            credentials: 'same-origin',
          });

          if (response.status !== 200) {
            console.warn(`Can\'t load coub '${matches[0]}':`, response.status, response.statusText);
            return;
          }

          const coub = await response.json() as Coub;
          const thumbnailUrl = coub.image_versions.template.replace('%{version}', 'small');
          const thumbnail = document.createElement('div');
          thumbnail.classList.add('post__file-preview', 'file');
          thumbnail.innerHTML = `
<div class="post__file-info file-info filesize">
  <a class="file-info__link" href="https://coub.com/view/${coub.permalink}" target="_blank">Coub</a>
  <span class="file-info__size"></span>
</div>

<a class="file__thumbnail thumbnail thumbnail--video" href="https://coub.com/view/${coub.permalink}" target="_blank">
  <img class="thumbnail__content thumbnail__content--image" src="${thumbnailUrl}" />
</a>`;
          thumbnail.style.maxHeight = '250px';
          thumbnail.style.maxWidth = '250px';
          postContent.insertBefore(thumbnail, postMessage);

          const link = DOM.qs('.thumbnail', thumbnail);
          link.addEventListener('click', e => {
            e.preventDefault();
            this.openCoubInPopup(coub);
          });
        } catch (e) {
          console.warn(`Can\'t load coub '${matches[0]}':`, e);
        }
      });
  }

  protected async openCoubInPopup(coub: Coub) {
    const coubUrl = `https://coub.com/view/${coub.permalink}`;
    const oEmbedUrl = `https://coub.com/api/oembed.json?url=${encodeURIComponent(coubUrl)}&autoplay=true`;
    const url = `${window.baseUrl}/api/embed?url=${encodeURIComponent(oEmbedUrl)}`;

    try {
      const response = await fetch(url, {
        credentials: 'same-origin',
      });

      if (response.status !== 200) {
        console.warn(`Can\'t load coub 'https://coub.com/view/${coub.permalink}':`, response.status, response.statusText);
        return;
      }

      const json = await response.json();
      this.popupViewModel.title = 'Coub — ' + coub.title;
      this.popupViewModel.content = json.html.replace('muted=true', 'muted=false');
      (this.popupViewModel as any).setPosition({
        x: Math.max(0, window.innerWidth / 2 - json.width / 2),
        y: Math.max(0, window.innerHeight / 2 - json.height / 2),
      });
      this.popupViewModel.hidden = false;
    } catch (e) {
      console.warn(`Can\'t load coub 'https://coub.com/view/${coub.permalink}':`, e);
    }
  }

  protected closePopup() {
    this.popupViewModel.hidden = true;
    this.popupViewModel.content = null;
  }
}
