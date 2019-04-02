import { Page } from '.';
import { Thread } from '../model';
import { DOM } from '../utils';
import { PostView, ToolsView, View } from '../views';

export class ThreadPage implements Page {
  readonly model: Thread;
  readonly children: View[];

  constructor() {
    const $posts = DOM.qsa('.post') as HTMLElement[];
    const postViews = $posts.map($post => new PostView($post));
    this.children = postViews;

    const posts = postViews.map(view => view.model);
    this.model = new Thread(posts);

    const $tools = DOM.qs('.tools') as HTMLElement;
    if ($tools) {
      this.children.push(new ToolsView($tools));
    }
  }
}
