import { BasePage } from './base';
import { Board } from '../model';
import { DOM } from '../utils';
import { ThreadPreviewView } from '../views';

export class BoardPage extends BasePage {
  readonly threads: ThreadPreviewView[];
  readonly model: Board;

  constructor() {
    super();

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

    const threads = this.threads.map(view => view.model);
    this.model = new Board(threads);
  }
}
