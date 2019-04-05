import { Post } from '.';
import { API } from '../services';
import { SettingsManager } from '../settings';
import { EventEmitter } from '../utils';

const updateInterval = 10;

export class Thread extends EventEmitter {
  protected _counter: number = updateInterval;
  protected _isLoading: boolean = false;
  protected _unreadPosts: number = 0;

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

  get latestPostId() {
    return this.posts.length ? this.posts[this.posts.length - 1].id : this.threadId;
  }

  constructor(
    readonly threadId: number,
    readonly posts: Post[],
  ) {
    super();
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
      this.counter--;
      if (this.counter === 0) {
        await this.loadNewPosts();
        this.counter = updateInterval;
      }
    } else {
      this.counter = updateInterval;
    }
  }

  readAll() {
    if (this.unreadPosts > 0) {
      this.unreadPosts = 0;
    }
  }
}
