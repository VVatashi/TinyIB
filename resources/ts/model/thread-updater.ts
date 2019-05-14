import { Thread } from '.';
import { API, Settings } from '../services';
import { EventEmitter, Keyboard } from '../utils';

const updateInterval = 10;

export class ThreadUpdater extends EventEmitter {
  protected _counter: number = updateInterval;
  protected _isLoading: boolean = false;

  get counter() {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
    this.emit('counter-changed', this._counter);
  }

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
    this.emit('loading-changed', this._isLoading);
  }

  get isUpdateEnabled() {
    return Settings.get('post.enable-thread-autoupdate');
  }

  set isUpdateEnabled(value: boolean) {
    Settings.set('post.enable-thread-autoupdate', value);
  }

  get threadId() {
    return this.thread.threadId;
  }

  get posts() {
    return this.thread.posts;
  }

  get latestPostId() {
    return this.posts.length ? this.posts[this.posts.length - 1].id : this.threadId;
  }

  constructor(
    readonly thread: Thread,
  ) {
    super();

    document.addEventListener('keydown', e => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (Keyboard.checkKeyChar(e, 'u')) {
        e.preventDefault();

        if (Settings.get('post.enable-thread-autoupdate')) {
          this.getNewPosts();
        }

        return false;
      }
    }, true);
  }

  protected async loadNewPosts() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    try {
      const html = await API.getThreadPostsHtml(this.threadId, this.latestPostId);
      this.emit('new-posts-loaded', html);
    } finally {
      this.isLoading = false;
    }
  }

  async getNewPosts() {
    await this.loadNewPosts();
    this.counter = updateInterval;
  }

  async updateCounter() {
    if (this.isUpdateEnabled) {
      if (this.counter > 0) {
        this.counter--;
      } else {
        try {
          await this.loadNewPosts();
        } finally {
          this.counter = updateInterval;
        }
      }
    } else {
      this.counter = updateInterval;
    }
  }
}
