import { DateTime } from 'luxon';
import BaseModule from './BaseModule';
import { qsa } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';

export default class CorrectTime extends BaseModule {
  protected readonly settings: {
    time_locale?: string,
    time_locale_custom_value?: string,
  };

  constructor() {
    super();

    this.settings = JSON.parse(Cookie.get('tinyib_settings', '{}'));
  }

  onReady() {
    const elements = qsa('.post-header__datetime');

    for (let i = 0; i < elements.length; ++i) {
      this.correctTime(elements[i]);
    }
  }

  onPostInsert(post: Element) {
    const time_el = post.querySelector('.post-header__datetime');

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

    const format = { ...DateTime.DATETIME_FULL_WITH_SECONDS };
    format.timeZone = undefined;
    format.timeZoneName = undefined;

    let time = DateTime.fromISO(time_str);

    if (this.settings.time_locale && this.settings.time_locale === 'custom'
      && this.settings.time_locale_custom_value) {
      time = time.setLocale(this.settings.time_locale_custom_value);
    }

    el.innerHTML = time.toLocaleString(format);
  }
}
