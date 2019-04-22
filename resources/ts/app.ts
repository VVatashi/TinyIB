import { eventBus, Events } from '.';
import {
  Post,
  PostingForm,
  PostReferenceMap,
} from './components';
import { Settings, LocalStorage } from './services';
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
  /** @todo Remove later */
  // Migrate old settings.
  if (LocalStorage.has('settings')) {
    const settings = JSON.parse(localStorage.getItem('settings'));
    LocalStorage.set('filter.remove-hidden-posts', settings.common.removeHiddenPosts);
    LocalStorage.set('filter.hidden-authors', settings.common.hiddenPosts);
    LocalStorage.set('post.enable-thread-autoupdate', settings.common.enableThreadAutoupdate);
    LocalStorage.set('post.scroll-to-new-posts', settings.common.scrollToNewPosts);
    LocalStorage.set('post.reflink-icon-position', settings.common.showPostReflinkIcon ? 'message' : 'header');
    LocalStorage.set('image.nsfw', settings.common.nsfw);
    LocalStorage.set('image.show-video-overlay', settings.common.showVideoOverlay);
    LocalStorage.set('image.hide-popup-on-outside-click', settings.common.hidePopupOnOutsideClick);
    LocalStorage.set('image.auto-play', settings.common.autoPlay);
    LocalStorage.set('link.add-names-to-links', settings.common.addNamesToLinks);
    LocalStorage.set('link.add-you-to-links', settings.common.addYouToLinks);
    LocalStorage.set('link.show-post-popups', settings.common.showPostPopups);
    LocalStorage.set('form.scroll-bottom', settings.form.scrollBottom);
    LocalStorage.set('form.save-subject', settings.form.saveSubject);
    LocalStorage.set('form.save-name', settings.form.saveName);
    LocalStorage.set('form.show-markup', settings.form.showMarkup);
    LocalStorage.set('form.show-markup-mobile', settings.form.showMarkupMobile);
    LocalStorage.set('form.save-form-state', settings.form.saveFormState);
    LocalStorage.set('form.align', settings.form.align);
    LocalStorage.set('form.preview-align', settings.form.previewAlign);
    LocalStorage.set('form.replaces', settings.form.replaces);
    LocalStorage.set('form.insert-tags-in-pairs', settings.form.insertTagsInPairs);
    LocalStorage.set('time.locale', settings.time.locale);
    LocalStorage.set('time.locale-custom', settings.time.localeCustom);
    LocalStorage.set('time.format', settings.time.format);
    LocalStorage.set('time.format-custom', settings.time.formatCustom);
    LocalStorage.set('time.zone', settings.time.zone);
    LocalStorage.set('time.zone-fixed', settings.time.zoneFixed);
    LocalStorage.set('common.smooth-scroll', settings.common.smoothScroll);
    LocalStorage.set('common.show-unread-count-in-title', settings.common.showUnreadCountInTitle);
    LocalStorage.set('common.layout', settings.common.layout);
    localStorage.removeItem('settings');
  }

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
