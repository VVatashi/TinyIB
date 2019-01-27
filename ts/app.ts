import { eventBus, Events } from '.';
import {
  Captcha,
  CorrectTime,
  DeleteForm,
  NewPostsDetector,
  Post,
  PostingForm,
  PostReferenceMap,
  Settings,
  StyleSwitch,
} from './components';
import { SettingsManager } from './settings';
import { DOM } from './utils';

declare global {
  interface Window {
    baseUrl: string;
  }
}

new Captcha();
new CorrectTime();
new DeleteForm();
new NewPostsDetector();
new Post();
new PostingForm();
new PostReferenceMap();
new Settings();
new StyleSwitch();

document.addEventListener('DOMContentLoaded', e => {
  eventBus.$emit(Events.Ready);

  const settings = SettingsManager.load();
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
  }

  const formWrapper = DOM.qs('.content__posting-form-wrapper');
  if (formWrapper) {
    formWrapper.classList.add('content__posting-form-wrapper--' + settings.form.align);
  }
});
