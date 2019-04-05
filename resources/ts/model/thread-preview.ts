import { Post } from '.';

export class ThreadPreview {
  constructor(
    readonly posts: Post[],
  ) {
  }

  get ownPosts() {
    return this.posts.filter(post => post.isOwn);
  }
}
