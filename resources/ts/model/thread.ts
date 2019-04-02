import { Post } from '.';

export class Thread {
  constructor(
    readonly posts: Post[],
  ) { }
}
