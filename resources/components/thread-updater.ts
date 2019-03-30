import Vue from 'vue';

import { eventBus, Events } from '../ts';
import { DOM } from '../ts/utils';

import Checkbox from './checkbox.vue';

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
      } catch (e) {
        this.status = `Error: ${e}`;
      }

      const newPosts = DOM.qsa('.post', postsWrapper)
        .filter(post => {
          const id = +post.getAttribute('data-post-id');
          return id > latestPostId;
        });

      if (newPosts.length) {
        latestPostId = +newPosts[newPosts.length - 1].getAttribute('data-post-id');
        eventBus.$emit(Events.PostsInserted, newPosts, false);
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
  components: {
    'x-checkbox': Checkbox,
  },
});
