import { PostView, View } from '.';
import { ThreadPreview } from '../model';

export class ThreadPreviewView implements View {
  readonly model: ThreadPreview;
  readonly children: PostView[];

  constructor(readonly $posts: HTMLElement[]) {
    this.children = $posts.map($post => new PostView($post));

    const posts = this.children.map(view => view.model);
    this.model = new ThreadPreview(posts);
  }
}
