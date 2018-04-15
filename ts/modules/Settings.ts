import BaseModule from './BaseModule';
import { qid, qsa, qs } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';

export default class Settings extends BaseModule {
  constructor() {
    super();
  }

  onReady() {
    const settings_form = qid('settings_form');

    if (!settings_form) {
      return;
    }

    const time_locale_custom = qid('time_locale_custom') as HTMLInputElement;
    const time_locale_custom_value = qid('time_locale_custom_value') as HTMLInputElement;
    const status = qid('status');

    // Load settings
    const settings_str = Cookie.get('tinyib_settings');

    if (settings_str) {
      const settings = JSON.parse(settings_str);

      if (settings.time_locale) {
        const element = qs(`input[value="${settings.time_locale}"]`) as HTMLInputElement;

        if (element) {
          element.checked = true;
        }
      }

      if (time_locale_custom_value && settings.time_locale_custom_value) {
        time_locale_custom_value.value = settings.time_locale_custom_value;
      }
    }

    if (time_locale_custom && time_locale_custom_value) {
      time_locale_custom_value.addEventListener('click', (e) => {
        time_locale_custom.checked = true;
      });
    }

    // Save settings
    settings_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const expiration_date = new Date();
      expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);

      Cookie.set('tinyib_settings', JSON.stringify({
        time_locale: (qs('input[name="time_locale"]:checked') as HTMLInputElement).value,
        time_locale_custom_value: time_locale_custom_value.value,
      }), expiration_date);

      if (status) {
        status.innerHTML = '';

        setTimeout(() => {
          status.innerHTML = 'Settings saved.';
        }, 300);
      }

      return false;
    });
  }
}
