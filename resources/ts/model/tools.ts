import { Settings } from '../settings';
import { EventEmitter } from '../utils';

export class Tools extends EventEmitter {
  protected readonly settings: Settings;

  protected _isSettingsOpened = false;

  public constructor() {
    super();

    this.settings = Settings.load();
  }

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
    return this.settings.image.nsfw;
  }

  get autoPlay(): boolean {
    return this.settings.image.autoPlay;
  }

  toggleSettings() {
    this.isSettingsOpened = !this.isSettingsOpened;
  }

  toggleNsfw() {
    this.settings.image.nsfw = !this.settings.image.nsfw;

    const settings = Settings.load();
    settings.image.nsfw = !settings.image.nsfw;
    Settings.save(settings);

    this.emit('toggle-nsfw', settings.image.nsfw);
  }

  toggleAutoPlay() {
    this.settings.image.autoPlay = !this.settings.image.autoPlay;

    const settings = Settings.load();
    settings.image.autoPlay = !settings.image.autoPlay;
    Settings.save(settings);

    this.emit('toggle-autoplay', settings.image.autoPlay);
  }

  scrollToTop() {
    this.emit('scroll-top');
  }

  scrollToBottom() {
    this.emit('scroll-bottom');
  }
}
