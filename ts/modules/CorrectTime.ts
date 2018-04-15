import { DateTime } from 'luxon';
import BaseModule from './BaseModule';
import { qsa } from '../utils/DOM';

export default class CorrectTime extends BaseModule {
  constructor() {
    super();
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

    const time = DateTime.fromISO(time_str);
    el.innerHTML = time.toLocaleString(format);
  }
}
