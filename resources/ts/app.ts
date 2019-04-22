import { eventBus, Events } from '.';
import {
  Post,
  PostingForm,
  PostReferenceMap,
} from './components';
import { Settings } from './services';
import { DOM } from './utils';
import { Page, BasePage, BoardPage, ThreadPage, SettingsPage } from './pages';

declare global {
  interface Window {
    baseUrl: string;
    app: App;
  }
}

new Post();
new PostingForm();
new PostReferenceMap();

document.addEventListener('DOMContentLoaded', e => {
  eventBus.emit(Events.Ready);

  const posts = DOM.qsa('.post');
  eventBus.emit(Events.PostsInserted, posts, true);

  if (Settings.get('common.smooth-scroll')) {
    document.body.classList.add('smooth-scroll');
  }

  const $layout = DOM.qs('.layout');
  if ($layout) {
    $layout.classList.add('layout--' + Settings.get('common.layout'));

    const reflinkPosition = Settings.get<string>('post.reflink-icon-position');
    if (reflinkPosition !== 'header') {
      $layout.classList.add('layout--hide-post-header-reflink-icon');
    }
    if (reflinkPosition !== 'post') {
      $layout.classList.add('layout--hide-post-reflink-icon');
    }

    if (Settings.get('image.show-video-overlay')) {
      $layout.classList.add('layout--show-thumb-overlay');
    }

    if (Settings.get('image.nsfw')) {
      $layout.classList.add('layout--nsfw');
    }

    if (Settings.get('filter.remove-hidden-posts')) {
      $layout.classList.add('layout--remove-hidden');
    }

    if (Settings.get('form.show-markup')) {
      $layout.classList.add('layout--show-markup');
    }

    if (Settings.get('form.show-markup-mobile')) {
      $layout.classList.add('layout--show-markup-mobile');
    }
  }

  const $formWrapper = DOM.qs('.content__posting-form-wrapper');
  if ($formWrapper) {
    $formWrapper.classList.add('content__posting-form-wrapper--' + Settings.get('form.align'));
  }
});

class App {
  readonly view: Page;

  constructor() {
    const path = window.location.pathname;
    let matches = [];
    if (matches = path.match(/\/res\/(\d+)(?:\.html)?\/?$/i)) {
      const threadId = +matches[1];
      this.view = new ThreadPage(threadId);
    } else if (path.match(/\/settings\/?$/i)) {
      this.view = new SettingsPage();
    } else if (path.match(/\/?$/i)) {
      this.view = new BoardPage();
    } else {
      this.view = new BasePage();
    }
  }
}

document.addEventListener('DOMContentLoaded', e => {
  window.app = new App();
});
