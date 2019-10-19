import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { eventBus, Events } from '.';
import {
  Post,
  PostingForm,
  PostReferenceMap,
  Settings as SettingsComponent,
  Tools,
  SettingsPopup,
} from './components';
import { Page, BasePage, BoardPage, ThreadPage } from './pages';
import Settings from './settings';
import { store, setOption, togglePopup } from './store';
import { DOM } from './utils';
import HotKeys from './hotkeys';

declare global {
  interface Window {
    baseUrl: string;
    websocketUrl: string;
    board: string;
    userId: number;
    userRole: number;
    ipHash: string;
    app?: App;
    hasWebpSupport: boolean;
    WebSocket?: any;
    OneSignal?: any;
    dataLayer?: any;
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

interface Components {
  [key: string]: any;
}

const components: Components = {
  settings: SettingsComponent,
  'settings-popup': SettingsPopup,
  tools: Tools,
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
      const element = React.createElement(Provider, { store }, React.createElement(component));
      ReactDOM.render(element, $element);
      $element.removeAttribute(COMPONENT_ATTRIBUTE);
    });
  }
}

function updateClass(element: Element, className: string, setClass: boolean = true) {
  if (!element) {
    return;
  }

  if (setClass) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

function updateClasses(settings: Settings) {
  updateClass(document.body, 'smooth-scroll', settings.common.smoothScroll);

  const $layout = DOM.qs('.layout');
  updateClass($layout, 'layout--left', settings.common.layout === 'left');
  updateClass($layout, 'layout--center', settings.common.layout === 'center');
  updateClass($layout, 'layout--hide-post-header-reflink-icon', settings.post.reflinkIconPosition !== 'header');
  updateClass($layout, 'layout--hide-post-reflink-icon', settings.post.reflinkIconPosition !== 'post');
  updateClass($layout, 'layout--show-thumb-overlay', settings.image.showVideoOverlay);
  updateClass($layout, 'layout--nsfw', settings.image.nsfw);
  updateClass($layout, 'layout--remove-hidden', settings.filter.removeHiddenPosts);
  updateClass($layout, 'layout--hide-threads', settings.filter.hideThreads);
  updateClass($layout, 'layout--show-markup', settings.form.showMarkup);
  updateClass($layout, 'layout--show-spoilers', settings.post.showSpoilers);
  updateClass($layout, 'layout--disable-sub', settings.post.disableSub);
  updateClass($layout, 'layout--modal-at-top', settings.image.modalAtTop);

  const $formWrapper = DOM.qs('.content__posting-form-wrapper');
  updateClass($formWrapper, 'content__posting-form-wrapper--left', settings.form.align === 'left');
  updateClass($formWrapper, 'content__posting-form-wrapper--center', settings.form.align === 'center');
}

new Post();
new PostingForm();
new PostReferenceMap();

document.addEventListener('DOMContentLoaded', () => {
  window.dataLayer = window.dataLayer || [];

  const { settings } = store.getState().settings;
  updateClasses(settings);

  store.subscribe(() => {
    const { settings } = store.getState().settings;
    updateClasses(settings);
  });

  eventBus.emit(Events.Ready);

  const posts = DOM.qsa('.post');
  eventBus.emit(Events.PostsInserted, posts, true);

  window.app = new App();
});

document.addEventListener('keydown', e => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
    return;
  }

  const { hotKeys } = store.getState().settings;
  if (HotKeys.check(hotKeys['toggleNSFW'], e)) {
    e.preventDefault();

    const { settings } = store.getState().settings;
    const value = !settings.image.nsfw;
    store.dispatch(setOption('image.nsfw;', value));

    return false;
  } else if (HotKeys.check(hotKeys['toggleSettings'], e)) {
    e.preventDefault();
    store.dispatch(togglePopup());

    return false;
  }
}, true);
