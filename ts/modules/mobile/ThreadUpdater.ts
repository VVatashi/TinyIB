import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';
import axios from 'axios';

export default class ThreadUpdater extends PostModule {
  protected readonly interval = 15000;

  protected latestPostId = 0;
  protected intervalId = NaN;
  protected isLoadingPosts = false;

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) {
    const id = +post.getAttribute('data-post-id');
    this.latestPostId = Math.max(this.latestPostId, id);
  }

  protected async checkNewPosts(thread: Element) {
    if (this.isLoadingPosts) {
      return;
    }

    this.isLoadingPosts = true;

    const threadId = +thread.getAttribute('data-thread-id');
    const latestPostId = this.latestPostId;
    const response = await axios.get(`${window.baseUrl}/ajax/mobile/thread/${threadId}?after=${latestPostId}`);
    const postsWrapper = qs('.thread__posts', thread);
    if (postsWrapper && response.data && response.data.length) {
      postsWrapper.insertAdjacentHTML('beforeend', response.data);

      const newPosts = qsa('.post', postsWrapper)
        .filter(post => {
          const id = +post.getAttribute('data-post-id');
          return id > latestPostId;
        });

      // Fade-in new posts.
      newPosts.forEach(post => post.classList.add('fadable', 'fade'));
      setTimeout(() => {
        newPosts.forEach(post => post.classList.remove('fade'));
      }, 100);

      this.manager.insertPosts(newPosts);

      // Remove old posts.
      const posts = qsa('.thread__post', postsWrapper);
      for (let i = 0; i < posts.length - 50; ++i) {
        posts[i].remove();
      }
    }

    this.isLoadingPosts = false;
  }

  protected clearInterval() {
    if (this.intervalId !== NaN) {
      clearInterval(this.intervalId);
    }
  }

  protected setInterval() {
    const thread = qs('.thread');
    if (!thread) {
      return;
    }

    const threadPage = +thread.getAttribute('data-thread-page');
    if (threadPage !== 0) {
      // Update thread only on the first page.
      return;
    }

    this.clearInterval();
    this.checkNewPosts(thread);

    this.intervalId = setInterval(() => {
      this.checkNewPosts(thread);
    }, this.interval);
  }

  onReady() {
    super.onReady();
    this.setInterval();
  }

  onEvent(event: string) {
    if (event === 'updateThread') {
      this.setInterval();
    }
  }
}
