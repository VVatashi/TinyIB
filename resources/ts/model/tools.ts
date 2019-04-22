import { Settings } from '../services';
import { EventEmitter } from '../utils';

export class Tools extends EventEmitter {
  protected _isSettingsOpened = false;

  get isSettingsOpened(): boolean {
    return this._isSettingsOpened;
  }

  set isSettingsOpened(value: boolean) {
    this._isSettingsOpened = value;

    if (value) {
      this.emit('settings-opened');
    } else {
      this.emit('settings-closed');
    }
  }

  get nsfw(): boolean {
    return Settings.get('image.nsfw');
  }

  get autoPlay(): boolean {
    return Settings.get('image.auto-play');
  }

  toggleSettings() {
    this.isSettingsOpened = !this.isSettingsOpened;
  }

  toggleNsfw() {
    const value = Settings.get('image.nsfw');
    Settings.set('image.nsfw', !value);
    this.emit('toggle-nsfw', !value);
  }

  toggleAutoPlay() {
    const value = Settings.get('image.auto-play');
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
