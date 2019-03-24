import { DateTime } from 'luxon';
import { eventBus, Events, Settings, SettingsManager } from '..';
import { DOM, Time } from '../utils';

export class CorrectTime {
  protected readonly settings: Settings;

  constructor() {
    this.settings = SettingsManager.load();
    eventBus.$on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  protected onPostsInserted(posts: Element[]) {
    posts.forEach(this.onPostInserted.bind(this));
  }

  protected onPostInserted(post: Element) {
    const timeElements = DOM.qsa('.post time', post);
    timeElements.forEach(this.correctTime.bind(this));
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
