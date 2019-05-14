import { Post } from '.';
import { EventEmitter } from '../utils';

export class Thread extends EventEmitter {
  protected _unreadPosts: number = 0;
  protected _hasReplies: boolean = false;

  get unreadPosts() {
    return this._unreadPosts;
  }

  set unreadPosts(value: number) {
    this._unreadPosts = value;
    this.emit('unread-posts-changed', this._unreadPosts);
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
  }

  get ownPosts() {
    return this.posts.filter(post => post.isOwn);
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
