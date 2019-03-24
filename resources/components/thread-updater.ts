import Vue from 'vue';

import { eventBus, Events } from '../ts';
import { DOM } from '../ts/utils';

import Checkbox from './checkbox.vue';

const autoupdate = true;
const updateInterval = 10;

let threadId = 0;
let latestPostId = 0;

export default Vue.extend({
  data() {
    return {
      autoupdate: autoupdate,
      counter: updateInterval,
      loading: false,
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

      const response = await fetch(`${window.baseUrl}/ajax/thread/${threadId}?after=${latestPostId}`, {
        credentials: 'same-origin',
      });

      const html = await response.text();
      postsWrapper.insertAdjacentHTML('beforeend', html);

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
    },
  },
  created() {
    const match = window.location.href.match(/\/res\/(\d+)/);
    if (match.length > 0) {
      threadId = +match[1];
    }

    latestPostId = +DOM.qs('.post:last-of-type').getAttribute('data-post-id');
    this._interval = setInterval(this.updateCounter.bind(this), 1000);

    eventBus.$on(Events.PostCreated, () => {
      this.counter = updateInterval;
      this.getNewPosts();
    });
  },
  beforeDestroy() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  },
  components: {
    'x-checkbox': Checkbox,
  },
});
