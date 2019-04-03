import { Page } from '.';
import { Board } from '../model';
import { DOM } from '../utils';
import { ThreadPreviewView, ToolsView } from '../views';

export class BoardPage implements Page {
  readonly threads: ThreadPreviewView[];
  readonly tools: ToolsView;
  readonly model: Board;

  constructor() {
    this.threads = [];

    const $posts = DOM.qsa('.post') as HTMLElement[];
    const $postGroups: HTMLElement[][] = [];
    for (let i = 0; i < $posts.length; ++i) {
      const $post = $posts[i];
      if ($post.classList.contains('post_oppost')) {
        $postGroups.push([]);
      }

      $postGroups[$postGroups.length - 1].push($post);
    }
    this.threads = $postGroups.map($posts => new ThreadPreviewView($posts));

    const $tools = DOM.qs('.tools') as HTMLElement;
    if ($tools) {
      this.tools = new ToolsView($tools);
    }

    const threads = this.threads.map(view => view.model);
    this.model = new Board(threads);
  }
}
