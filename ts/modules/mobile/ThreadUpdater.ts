import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';
import axios from 'axios';

export default class ThreadUpdater extends PostModule {
  protected readonly interval = 15000;

  protected latestPostId = 0;
  protected intervalId = NaN;

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) {
    const id = post.getAttribute('data-post-id');
    this.latestPostId = Math.max(this.latestPostId, +id);
  }

  protected checkNewPosts(thread: Element) {
    const threadId = +thread.getAttribute('data-thread-id');
    const latestPostId = this.latestPostId;
    axios.get(`${window.baseUrl}/ajax/mobile/thread/${threadId}?after=${latestPostId}`)
      .then(result => {
        const postsWrapper = qs('.thread__posts', thread);
        if (postsWrapper && result.data && result.data.length) {
          // Fade-in new posts.
          const newPostsWrapper = document.createElement('div');
          newPostsWrapper.classList.add('fadable', 'fade');
          newPostsWrapper.insertAdjacentHTML('beforeend', result.data);
          postsWrapper.appendChild(newPostsWrapper);

          this.manager.insertPosts(qsa('.post', newPostsWrapper));

          setTimeout(() => {
            newPostsWrapper.classList.remove('fade');
          }, 100);

          // Remove old posts.
          const posts = qsa('.thread__post', postsWrapper);
          for (let i = 0; i < posts.length - 50; ++i) {
            posts[i].remove();
          }

          // TODO: add check for empty post wrappers.
        }
      });
  }

  protected clearInterval() {
    if (this.intervalId !== NaN) {
      clearInterval(this.intervalId);
    }
  }

  protected setInterval() {
    const thread = qs('.thread');
    if (!thread) {
      console.warn('.thread is not found.');
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
