import { SettingsManager } from '../settings';
import { EventEmitter } from '../utils';

export class Tools extends EventEmitter {
  get nsfw(): boolean {
    const settings = SettingsManager.load();
    return settings.common.nsfw;
  }

  get autoPlay(): boolean {
    const settings = SettingsManager.load();
    return settings.common.autoPlay;
  }

  toggleNsfw() {
    const settings = SettingsManager.load();
    settings.common.nsfw = !settings.common.nsfw;
    SettingsManager.save(settings);

    this.emit('toggle-nsfw', settings.common.nsfw);
  }

  toggleAutoPlay() {
    const settings = SettingsManager.load();
    settings.common.autoPlay = !settings.common.autoPlay;
    SettingsManager.save(settings);

    this.emit('toggle-autoplay', settings.common.autoPlay);
  }

  scrollToTop() {
    this.emit('scroll-top');
  }

  scrollToBottom() {
    this.emit('scroll-bottom');
  }
}
