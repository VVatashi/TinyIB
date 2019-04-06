import { eventBus, Events } from '.';
import {
  PostCorrectTime,
  PostForm,
  PostImagePopup,
  PostQuote,
  PostReferenceMap,
  ThreadUpdater,
} from './components/mobile';

declare global {
  interface Window {
    baseUrl: string;
  }
}

new PostCorrectTime();
new PostForm();
new PostImagePopup();
new PostQuote();
new PostReferenceMap();
new ThreadUpdater();

document.addEventListener('DOMContentLoaded', e => {
  eventBus.emit(Events.Ready);
});
