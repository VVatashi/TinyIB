import Vue from 'vue';

import { eventBus, Events } from '../ts';
import { DOM } from '../ts/utils';

import Checkbox from './checkbox.vue';

const favicon = DOM.qid('favicon') as HTMLLinkElement;
const faviconHref = favicon.href;
const faviconSize = 16;

let unreadPosts = 0;

function updateFavicon(unreadPosts: number) {
  const canvas = document.createElement('canvas');
  canvas.width = faviconSize;
  canvas.height = faviconSize;

  const context = canvas.getContext('2d');
  const img = document.createElement('img');
  img.src = faviconHref;
  img.onload = () => {
    context.drawImage(img, 0, 0, faviconSize, faviconSize);

    if (unreadPosts > 0) {
      const x = canvas.width - faviconSize / 3;
      const y = canvas.height - faviconSize / 3;

      context.beginPath();
      context.arc(x, y, faviconSize / 3, 0, 2 * Math.PI);
      context.fillStyle = '#FF0000';
      context.fill();

      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#FFFFFF';

      if (unreadPosts < 10) {
        context.font = `700 10px 'Roboto Condensed', sans-serif`;
        context.fillText(unreadPosts.toString(), x, y + 1);
      } else {
        context.font = `700 8px 'Roboto Condensed', sans-serif`;
        context.fillText(unreadPosts.toString(), x, y);
      }
    }

    const oldFavicon = DOM.qid('favicon') as HTMLLinkElement;
    if (oldFavicon) {
      document.head.removeChild(oldFavicon);
      oldFavicon.remove();
    }

    const favicon = document.createElement('link');
    favicon.id = 'favicon';
    favicon.rel = 'icon';
    favicon.href = canvas.toDataURL('image/png');
    document.head.appendChild(favicon);

    canvas.remove();
    img.remove();
  };
}

const autoupdate = true;
const updateInterval = 10;

let threadId = 0;
let latestPostId = 0;

async function fetchPostsHtml(threadId: number, after: number = 0) {
  const response = await fetch(`${window.baseUrl}/ajax/thread/${threadId}?after=${after}`, {
    credentials: 'same-origin',
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return await response.text();
}

export default Vue.extend({
  data() {
    return {
      autoupdate: autoupdate,
      counter: updateInterval,
      loading: false,
      status: null,
    };
  },
  methods: {
    async getNewPosts() {
      if (this.loading) {
        return;
      }

      const postsWrapper = DOM.qs('.post').parentElement;
      if (!postsWrapper) {
        console.warn('Posts wrapper element not found');
        return;
      }

      this.loading = true;

      try {
        const html = await fetchPostsHtml(threadId, latestPostId);
        postsWrapper.insertAdjacentHTML('beforeend', html);
        this.status = null;
      } catch (e) {
        this.status = `Error: ${e}`;
      }

      const posts = DOM.qsa('.post', postsWrapper);
      const newPosts = posts
        .filter(post => {
          const id = +post.getAttribute('data-post-id');
          return id > latestPostId;
        });

      if (newPosts.length) {
        latestPostId = +newPosts[newPosts.length - 1].getAttribute('data-post-id');
        eventBus.$emit(Events.PostsInserted, newPosts, false);

        if (document.hidden) {
          unreadPosts += newPosts.length;
          updateFavicon(unreadPosts);
        }

        newPosts.forEach(($post, index) => {
          const $postNo = document.createElement('span');
          $postNo.classList.add('post-header__post-no');
          $postNo.textContent = `#${posts.length - newPosts.length + index + 1}`;

          const $refWrapper = DOM.qs('.post-header__reflink-wrapper', $post);
          $refWrapper.appendChild($postNo);

          const $mobileRefWrapper = DOM.qs('.post-header-mobile__reflink-wrapper', $post);
          $mobileRefWrapper.appendChild($postNo.cloneNode(true));
        });
      }

      this.loading = false;
    },
    onGetNewPostsClick() {
      this.counter = updateInterval;
      this.getNewPosts();
    },
    async updateCounter() {
      if (this.autoupdate) {
        this.counter--;
        if (this.counter === 0) {
          await this.getNewPosts();
          this.counter = updateInterval;
        }
      } else {
        this.counter = updateInterval;
      }

      setTimeout(this.updateCounter.bind(this), 1000);
    },
  },
  created() {
    const match = window.location.href.match(/\/res\/(\d+)/);
    if (match.length > 0) {
      threadId = +match[1];
    }

    latestPostId = +DOM.qs('.post:last-of-type').getAttribute('data-post-id');
    setTimeout(this.updateCounter.bind(this), 1000);

    const update = () => {
      this.counter = updateInterval;
      this.getNewPosts();
    };

    eventBus.$on(Events.PostCreated, update);
    eventBus.$on(Events.UpdateThread, update);
  },
  mounted() {
    document.addEventListener('visibilitychange', (e) => {
      if (!document.hidden && unreadPosts > 0) {
        unreadPosts = 0;
        updateFavicon(unreadPosts);
      }
    });
  },
  components: {
    'x-checkbox': Checkbox,
  },
});
