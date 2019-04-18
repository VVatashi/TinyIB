import { Settings } from '../services';
import { EventEmitter } from '../utils';

export class Tools extends EventEmitter {
  get nsfw(): boolean {
    return Settings.get('common.nsfw', false);
  }

  get autoPlay(): boolean {
    return Settings.get('common.auto-play', true);
  }

  toggleNsfw() {
    const value = Settings.get('common.nsfw', false);
    Settings.set('common.nsfw', !value);
    this.emit('toggle-nsfw', !value);
  }

  toggleAutoPlay() {
    const value = Settings.get('common.auto-play', false);
    Settings.set('common.auto-play', !value);
    this.emit('toggle-autoplay', !value);
  }

  scrollToTop() {
    this.emit('scroll-top');
  }

  scrollToBottom() {
    this.emit('scroll-bottom');
  }
}
