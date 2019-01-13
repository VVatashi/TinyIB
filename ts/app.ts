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
});
