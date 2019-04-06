import Vue from 'vue';
import { eventBus, Events } from '../..';
import { DOM } from '../../utils';

interface ViewModel {
  module: ThreadUpdater;
  isAuto: boolean;
  counter: number;
  intervalId: number;

  updateThread(): void;
  onTick(): void;
};

export class ThreadUpdater {
  protected viewModel: ViewModel = null;
  protected interval = 10;
  protected latestPostId = 0;
  protected isUpdating = false;

  constructor() {
    eventBus.on(Events.Ready, this.onReady.bind(this));
    eventBus.on(Events.PostsInserted, (posts: Element[]) =>
      posts.forEach(this.onPostInsert.bind(this)));
    eventBus.on(Events.PostCreated, () => {
      const isAuto = this.viewModel.isAuto;
      this.viewModel.isAuto = false;
      this.viewModel.counter = this.interval;
      this.updateThread();
      this.viewModel.isAuto = isAuto;
    });
  }

  onReady() {
    const thread = DOM.qs('.thread');
    if (!thread) {
      return;
    }

    const threadPage = +thread.getAttribute('data-thread-page');
    if (threadPage !== 0) {
      // Update thread only on the first page (with latest posts).
      return;
    }

    const posts = DOM.qsa('.post');
    if (posts.length > 0) {
      eventBus.emit(Events.PostsInserted, posts);
    }

    this.viewModel = new Vue({
      el: '#thread-updater',
      template: `
<div class="thread-updater thread__updater">
  <button class="thread-updater__update" v-on:click="updateThread">Update</button>

  <label class="thread-updater__auto">
    <input type="checkbox" class="thread-updater__auto-checkbox" v-on:change="counter = module.interval" v-model="isAuto" />
    Auto
    <span class="thread-updater__auto-counter" v-if="isAuto">
      {{ counter }}
    </span>
  </label>

  <span class="thread-updater__updating" v-if="module.isUpdating">Updating...</span>
</div>`,
      data: {
        module: this,
        isAuto: true,
        isUpdating: false,
        counter: this.interval,
        intervalId: NaN,
      },
      methods: {
        onTick(this: ViewModel) {
          if (this.isAuto) {
            if (this.counter > 0) {
              this.counter--;
            } else {
              this.updateThread();
            }
          }
        },
        updateThread(this: ViewModel) {
          this.counter = this.module.interval;
          this.module.updateThread();
        },
      },
      mounted(this: ViewModel) {
        this.intervalId = setInterval(this.onTick, 1000);
      },
      beforeDestroy(this: ViewModel) {
        if (this.intervalId !== NaN) {
          clearInterval(this.intervalId);
        }
      },
    });
  }

  protected onPostInsert(post: Element) {
    const id = +post.getAttribute('data-post-id');
    this.latestPostId = Math.max(this.latestPostId, id);
  }

  protected async updateThread() {
    if (this.isUpdating) {
      return;
    }

    const thread = DOM.qs('.thread');
    if (!thread) {
      return;
    }

    this.isUpdating = true;

    const postsWrapper = DOM.qs('.thread__posts', thread);
    if (postsWrapper) {
      const threadId = +thread.getAttribute('data-thread-id');
      const latestPostId = this.latestPostId;
      const response = await fetch(`${window.baseUrl}/ajax/mobile/thread/${threadId}?after=${latestPostId}`, {
        credentials: 'same-origin',
      });
      if (response.status < 400) {
        const data = await response.text();
        postsWrapper.insertAdjacentHTML('beforeend', data);

        const newPosts = DOM.qsa('.post', postsWrapper)
          .filter(post => {
            const id = +post.getAttribute('data-post-id');
            return id > latestPostId;
          });

        // Fade-in new posts.
        newPosts.forEach(post => post.classList.add('fadable', 'fade'));
        setTimeout(() => {
          newPosts.forEach(post => post.classList.remove('fade'));
        }, 100);

        eventBus.emit(Events.PostsInserted, newPosts);

        // Remove old posts.
        const posts = DOM.qsa('.thread__post', postsWrapper);
        for (let i = 0; i < posts.length - 50; ++i) {
          posts[i].remove();
        }
      }
    }

    this.isUpdating = false;
  }
}
