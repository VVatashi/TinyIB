import { eventBus, Events } from '.';
import {
  Captcha,
  CorrectTime,
  DeleteForm,
  NewPostsDetector,
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
new PostingForm();
new PostReferenceMap();
new Settings();
new StyleSwitch();
new NewPostsDetector();

document.addEventListener('DOMContentLoaded', e => {
  eventBus.$emit(Events.Ready);

  const settings = SettingsManager.load();
  const layout = DOM.qs('.layout');
  if (layout) {
    layout.classList.add('layout--' + settings.common.layout);
  }
});
