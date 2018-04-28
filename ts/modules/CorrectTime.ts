import { DateTime } from 'luxon';
import BaseModule from './BaseModule';
import ISettingsDto from '../ISettingsDto';
import ModuleManager from '../ModuleManager';
import { qs, qsa } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';
import Time from '../utils/Time';

export default class CorrectTime extends BaseModule {
  protected readonly settings: ISettingsDto;

  constructor(manager: ModuleManager) {
    super(manager);

    // Load settings from a cookie
    this.settings = JSON.parse(Cookie.get('tinyib_settings', '{}'));
  }

  onReady() {
    const elements = qsa('.post-header__datetime');

    for (let i = 0; i < elements.length; ++i) {
      this.correctTime(elements[i]);
    }
  }

  onPostInsert(post: Element) {
    const time_el = qs('.post-header__datetime', post);

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
    el.innerHTML = Time.format(time, this.settings);
  }
}
