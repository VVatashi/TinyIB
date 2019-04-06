import { eventBus, Events } from '.';
import {
  Post,
  PostingForm,
  PostReferenceMap,
  Settings,
} from './components';
import { SettingsManager } from './settings';
import { DOM } from './utils';
import { Page, BoardPage, ThreadPage, BasePage } from './pages';

declare global {
  interface Window {
    baseUrl: string;
    app: App;
  }
}

new Post();
new PostingForm();
new PostReferenceMap();
new Settings();

const settings = SettingsManager.load();

document.addEventListener('DOMContentLoaded', e => {
  eventBus.emit(Events.Ready);

  const posts = DOM.qsa('.post');
  eventBus.emit(Events.PostsInserted, posts, true);

  if (settings.common.smoothScroll) {
    document.body.classList.add('smooth-scroll');
  }

  const layout = DOM.qs('.layout');
  if (layout) {
    layout.classList.add('layout--' + settings.common.layout);

    if (!settings.common.showPostHeaderReflinkIcon) {
      layout.classList.add('layout--hide-post-header-reflink-icon');
    }

    if (!settings.common.showPostReflinkIcon) {
      layout.classList.add('layout--hide-post-reflink-icon');
    }

    if (settings.common.showVideoOverlay) {
      layout.classList.add('layout--show-thumb-overlay');
    }

    if (settings.common.nsfw) {
      layout.classList.add('layout--nsfw');
    }

    if (settings.common.removeHiddenPosts) {
      layout.classList.add('layout--remove-hidden');
    }

    if (settings.form.showMarkup) {
      layout.classList.add('layout--show-markup');
    }

    if (settings.form.showMarkupMobile) {
      layout.classList.add('layout--show-markup-mobile');
    }
  }

  const formWrapper = DOM.qs('.content__posting-form-wrapper');
  if (formWrapper) {
    formWrapper.classList.add('content__posting-form-wrapper--' + settings.form.align);
  }
});

class App {
  readonly view: Page;

  constructor() {
    const path = window.location.pathname;
    let matches = [];
    if (path.match(/^\/[0-9a-z_-]+\/?$/i)) {
      this.view = new BoardPage();
    } else if (matches = path.match(/^\/[0-9a-z_-]+\/res\/(\d+)\/?$/i)) {
      const threadId = +matches[1];
      this.view = new ThreadPage(threadId);
    } else {
      this.view = new BasePage();
    }
  }
}

document.addEventListener('DOMContentLoaded', e => {
  window.app = new App();
});
