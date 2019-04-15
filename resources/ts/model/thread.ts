import { Post } from '.';
import { API } from '../services';
import { SettingsManager } from '../settings';
import { EventEmitter, Keyboard } from '../utils';

const updateInterval = 10;

export class Thread extends EventEmitter {
  protected _counter: number = updateInterval;
  protected _isLoading: boolean = false;
  protected _unreadPosts: number = 0;
  protected _hasReplies: boolean = false;

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

  get unreadPosts() {
    return this._unreadPosts;
  }

  set unreadPosts(value: number) {
    this._unreadPosts = value;
    this.emit('unread-posts-changed', this._unreadPosts);
  }

  get isUpdateEnabled() {
    const settings = SettingsManager.load();
    return settings.common.enableThreadAutoupdate;
  }

  set isUpdateEnabled(value: boolean) {
    const settings = SettingsManager.load();
    settings.common.enableThreadAutoupdate = value;
    SettingsManager.save(settings);
  }

  get hasReplies() {
    return this._hasReplies;
  }

  get latestPostId() {
    return this.posts.length ? this.posts[this.posts.length - 1].id : this.threadId;
  }

  constructor(
    readonly threadId: number,
    readonly posts: Post[],
  ) {
    super();

    document.addEventListener('keydown', e => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (Keyboard.checkKeyChar(e, 'u')) {
        e.preventDefault();

        const settings = SettingsManager.load();
        if (settings.common.enableThreadAutoupdate) {
          this.getNewPosts();
        }

        return false;
      }
    }, true);
  }

  get ownPosts() {
    return this.posts.filter(post => post.isOwn);
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

  addPosts(posts: Post[], unread: boolean = false) {
    this.posts.push(...posts);

    if (unread) {
      this.unreadPosts += posts.length;

      if (!this._hasReplies) {
        const references = posts
          .map(post => post.referencedIds)
          .reduce((prev, curr) => prev.concat(curr), []);

        const referencedPosts = references
          .map(ref => this.posts.find(post => post.id === ref))
          .filter(post => post);

        this._hasReplies = referencedPosts.some(post => post.isOwn);
      }
    }
  }

  readAll() {
    if (this.unreadPosts > 0) {
      this.unreadPosts = 0;
    }

    this._hasReplies = false;
  }
}
