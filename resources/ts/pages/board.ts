import { Page } from '.';
import { Board } from '../model';
import { DOM } from '../utils';
import { ThreadPreviewView, ToolsView, View } from '../views';

export class BoardPage implements Page {
  readonly model: Board;
  readonly children: View[];

  constructor() {
    this.children = [];

    const $posts = DOM.qsa('.post') as HTMLElement[];
    const $postGroups: HTMLElement[][] = [];
    for (let i = 0; i < $posts.length; ++i) {
      const $post = $posts[i];
      if ($post.classList.contains('post_oppost')) {
        $postGroups.push([]);
      }

      $postGroups[$postGroups.length - 1].push($post);
    }
    const threadViews = $postGroups.map($posts => new ThreadPreviewView($posts))
    this.children = threadViews;

    const threads = threadViews.map(view => view.model);
    this.model = new Board(threads);

    const $tools = DOM.qs('.tools') as HTMLElement;
    if ($tools) {
      this.children.push(new ToolsView($tools));
    }
  }
}
