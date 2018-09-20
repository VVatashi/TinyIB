import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs } from '../../utils/DOM';
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
      axios.get(`${window.baseUrl}/ajax/mobile/thread/${threadId}?after=${this.latestPostId}`)
        .then(result => {
          const postsWrapper = qs('.thread__posts', thread);
          if (postsWrapper) {
            postsWrapper.insertAdjacentHTML('beforeend', result.data);
          }
        });
    }, 15000);
  }
}
