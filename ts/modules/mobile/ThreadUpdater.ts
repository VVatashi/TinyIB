import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';
import axios from 'axios';

export default class ThreadUpdater extends PostModule {
  protected latestPostId = 0;

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) {
    const id = post.getAttribute('data-post-id');
    this.latestPostId = Math.max(this.latestPostId, +id);
  }

  onReady() {
    super.onReady();

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

    const threadId = +thread.getAttribute('data-thread-id');
    setInterval(() => {
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

            setTimeout(() => {
              newPostsWrapper.classList.remove('fade');
            }, 100);

            // Remove old posts.
            const posts = qsa('.thread__post', postsWrapper);
            for (let i = 0; i < posts.length - 50; ++i) {
              posts[i].remove();
            }
          }
        });
    }, 15000);
  }
}
