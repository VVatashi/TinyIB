import { store, setOption } from '../store';
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
    const { settings } = store.getState().settings;
    return settings.image.nsfw;
  }

  get autoPlay(): boolean {
    const { settings } = store.getState().settings;
    return settings.image.autoPlay;
  }

  toggleSettings() {
    this.isSettingsOpened = !this.isSettingsOpened;
  }

  toggleNsfw() {
    const { settings } = store.getState().settings;
    const nsfw = !settings.image.nsfw;
    store.dispatch(setOption('image.nsfw', nsfw));
    this.emit('toggle-nsfw', nsfw);
  }

  toggleAutoPlay() {
    const { settings } = store.getState().settings;
    const autoPlay = !settings.image.autoPlay;
    store.dispatch(setOption('image.autoPlay', autoPlay));
    this.emit('toggle-autoplay', autoPlay);
  }

  scrollToTop() {
    this.emit('scroll-top');
  }

  scrollToBottom() {
    this.emit('scroll-bottom');
  }
}
