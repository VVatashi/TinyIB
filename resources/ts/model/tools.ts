import { Settings } from '../services';
import { EventEmitter } from '../utils';

export class Tools extends EventEmitter {
  get nsfw(): boolean {
    return Settings.get('image.nsfw', false);
  }

  get autoPlay(): boolean {
    return Settings.get('image.auto-play', true);
  }

  toggleNsfw() {
    const value = Settings.get('image.nsfw', false);
    Settings.set('image.nsfw', !value);
    this.emit('toggle-nsfw', !value);
  }

  toggleAutoPlay() {
    const value = Settings.get('image.auto-play', true);
    Settings.set('image.auto-play', !value);
    this.emit('toggle-autoplay', !value);
  }

  scrollToTop() {
    this.emit('scroll-top');
  }

  scrollToBottom() {
    this.emit('scroll-bottom');
  }
}
