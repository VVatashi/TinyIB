import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { eventBus, Events } from '.';
import {
  Post,
  PostingForm,
  PostReferenceMap,
  Settings as SettingsComponent,
} from './components';
import { Page, BasePage, BoardPage, ThreadPage } from './pages';
import { Settings } from './settings';
import { store } from './store';
import { DOM } from './utils';

declare global {
  interface Window {
    baseUrl: string;
    websocketUrl: string;
    board: string;
    userId: number;
    userRole: number;
    ipHash: string;
    app: App;
    hasWebpSupport: boolean;
    WebSocket?: any;
    OneSignal?: any;
  }
}

// Detect WEBP support.
window.hasWebpSupport = false;
try {
  const image = new Image();
  image.addEventListener('load', () => window.hasWebpSupport = image.width === 1);
  image.addEventListener('error', () => window.hasWebpSupport = false);
  image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
} catch { }

new Post();
new PostingForm();
new PostReferenceMap();

const settings = Settings.load();

document.addEventListener('DOMContentLoaded', e => {
  eventBus.emit(Events.Ready);

  const posts = DOM.qsa('.post');
  eventBus.emit(Events.PostsInserted, posts, true);

  if (settings.common.smoothScroll) {
    document.body.classList.add('smooth-scroll');
  }

  const $layout = DOM.qs('.layout');
  if ($layout) {
    $layout.classList.add('layout--' + settings.common.layout);

    const reflinkPosition = settings.post.reflinkIconPosition;
    if (reflinkPosition !== 'header') {
      $layout.classList.add('layout--hide-post-header-reflink-icon');
    }
    if (reflinkPosition !== 'post') {
      $layout.classList.add('layout--hide-post-reflink-icon');
    }

    if (settings.image.showVideoOverlay) {
      $layout.classList.add('layout--show-thumb-overlay');
    }

    if (settings.image.nsfw) {
      $layout.classList.add('layout--nsfw');
    }

    if (settings.filter.removeHiddenPosts) {
      $layout.classList.add('layout--remove-hidden');
    }

    if (settings.filter.hideThreads) {
      $layout.classList.add('layout--hide-threads');
    }

    if (settings.form.showMarkup) {
      $layout.classList.add('layout--show-markup');
    }

    if (settings.post.showSpoilers) {
      $layout.classList.add('layout--show-spoilers');
    }

    if (settings.post.disableSub) {
      $layout.classList.add('layout--disable-sub');
    }

    if (settings.image.modalAtTop) {
      $layout.classList.add('layout--modal-at-top');
    }
  }

  const $formWrapper = DOM.qs('.content__posting-form-wrapper');
  if ($formWrapper) {
    $formWrapper.classList.add('content__posting-form-wrapper--' + settings.form.align);
  }
});

interface Components {
  [key: string]: any;
}

const components: Components = {
  settings: SettingsComponent,
};

class App {
  public readonly view: Page;

  public constructor() {
    const path = window.location.pathname;
    let matches = [];
    if (matches = path.match(/\/res\/(\d+)(?:\.html)?\/?$/i)) {
      const threadId = +matches[1];
      this.view = new ThreadPage(threadId);
    } else if (path.match(/\/?$/i)) {
      this.view = new BoardPage();
    } else {
      this.view = new BasePage();
    }

    this.initComponents();
  }

  public initComponents(context: Element = null) {
    const COMPONENT_ATTRIBUTE = 'data-component';
    const $elements = DOM.qsa(`[${COMPONENT_ATTRIBUTE}]`, context);
    $elements.forEach($element => {
      const key = $element.getAttribute(COMPONENT_ATTRIBUTE);
      const component = components[key];
      const element = React.createElement(Provider, { store }, [
        React.createElement(component),
      ]);
      ReactDOM.render(element, $element);
      $element.removeAttribute(COMPONENT_ATTRIBUTE);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Settings.migrate();
  window.app = new App();
});
