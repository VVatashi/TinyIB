import { Page } from '.';
import { Thread } from '../model';
import { DOM } from '../utils';
import { PostView, ToolsView } from '../views';

export class ThreadPage implements Page {
  readonly posts: PostView[];
  readonly tools: ToolsView;
  readonly model: Thread;

  constructor() {
    const $posts = DOM.qsa('.post') as HTMLElement[];
    this.posts = $posts.map($post => new PostView($post));

    const $tools = DOM.qs('.tools') as HTMLElement;
    if ($tools) {
      this.tools = new ToolsView($tools);
    }

    const posts = this.posts.map(view => view.model);
    this.model = new Thread(posts);
  }
}
