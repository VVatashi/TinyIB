import { DateTime } from 'luxon';
import { eventBus, Events, Settings, SettingsManager } from '..';
import { DOM, Time } from '../utils';

export class CorrectTime {
  protected readonly settings: Settings;

  constructor() {
    this.settings = SettingsManager.load();
    eventBus.$on(Events.Ready, this.onReady.bind(this));
    eventBus.$on(Events.PostsInserted, (posts: Element[]) =>
      posts.forEach(this.onPostInsert.bind(this)));
  }

  onReady() {
    const elements = DOM.qsa('.post-header__datetime');
    elements.forEach(element => this.correctTime(element));
  }

  onPostInsert(post: Element) {
    const time_el = DOM.qs('.post-header__datetime', post);
    if (!time_el) {
      return;
    }

    this.correctTime(time_el);
  }

  protected correctTime(el: Element) {
    const time_str = el.getAttribute('datetime');
    if (!time_str) {
      return;
    }

    const time = DateTime.fromISO(time_str);
    el.textContent = Time.format(time, this.settings);
  }
}
