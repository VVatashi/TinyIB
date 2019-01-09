import { DateTime } from 'luxon';
import { eventBus, Events, ISettingsDto } from '..';
import { Cookie, DOM, Time } from '../utils';

export class Settings {
  protected readonly settings: ISettingsDto;

  constructor() {
    // Load settings from a cookie
    this.settings = JSON.parse(Cookie.get('tinyib_settings', '{}'));
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const settings_form = DOM.qid('settings_form');
    if (!settings_form) {
      return;
    }

    const status = DOM.qid('status');
    const time_locale_custom = DOM.qid('time_locale_custom') as HTMLInputElement;
    const time_locale_custom_value = DOM.qid('time_locale_custom_value') as HTMLInputElement;
    const time_format_custom = DOM.qid('time_format_custom') as HTMLInputElement;
    const time_format_custom_value = DOM.qid('time_format_custom_value') as HTMLInputElement;
    const time_zone_fixed = DOM.qid('time_zone_fixed') as HTMLInputElement;
    const time_zone_fixed_offset = DOM.qid('time_zone_fixed_offset') as HTMLInputElement;
    const time_current_format = DOM.qid('time_current_format') as HTMLElement;

    // Set the initial settings form state
    if (this.settings.form_preview_align) {
      const element = DOM.qs(`input[name="form_preview_align"][value="${this.settings.form_preview_align}"]`) as HTMLInputElement;

      if (element) {
        element.checked = true;
      }
    }

    if (this.settings.time_locale) {
      const element = DOM.qs(`input[name="time_locale"][value="${this.settings.time_locale}"]`) as HTMLInputElement;

      if (element) {
        element.checked = true;
      }
    }

    if (this.settings.time_format) {
      const element = DOM.qs(`input[name="time_format"][value="${this.settings.time_format}"]`) as HTMLInputElement;

      if (element) {
        element.checked = true;
      }
    }

    if (this.settings.time_zone) {
      const element = DOM.qs(`input[name="time_zone"][value="${this.settings.time_zone}"]`) as HTMLInputElement;

      if (element) {
        element.checked = true;
      }
    }

    time_locale_custom_value.value = this.settings.time_locale_custom_value || '';
    time_format_custom_value.value = this.settings.time_format_custom_value || '';
    time_zone_fixed_offset.value = (this.settings.time_zone_fixed_offset || 0).toString();

    // Check a radio button on a corresponding text field click
    if (time_locale_custom && time_locale_custom_value) {
      time_locale_custom_value.addEventListener('click', (e) => {
        time_locale_custom.checked = true;
      });
    }

    if (time_format_custom && time_format_custom_value) {
      time_format_custom_value.addEventListener('click', (e) => {
        time_format_custom.checked = true;
      });
    }

    if (time_zone_fixed && time_zone_fixed_offset) {
      time_zone_fixed_offset.addEventListener('click', (e) => {
        time_zone_fixed.checked = true;
      });
    }

    // Save the settings form state in a cookie
    settings_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const expiration_date = new Date();
      expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);

      const settings = this.getFormValues();
      Cookie.set('tinyib_settings', JSON.stringify(settings), expiration_date);

      // Indicate that settings are saved
      if (status) {
        status.innerHTML = '';

        setTimeout(() => {
          status.innerHTML = 'Settings saved.';
        }, 1000 / 3);
      }

      return false;
    });

    // Show the current time format
    const showTime = () => {
      if (time_current_format) {
        try {
          const time = DateTime.fromJSDate(new Date());
          const settings = this.getFormValues();
          time_current_format.innerHTML = Time.format(time, settings);
        }
        catch {
          time_current_format.innerHTML = 'Invalid format';
        }
      }
    }

    showTime();
    setInterval(showTime, 1000);
  }

  protected getFormValues(): ISettingsDto {
    const form_preview_align = DOM.qs('input[name="form_preview_align"]:checked') as HTMLInputElement;
    const time_locale = DOM.qs('input[name="time_locale"]:checked') as HTMLInputElement;
    const time_locale_custom_value = DOM.qid('time_locale_custom_value') as HTMLInputElement;
    const time_format = DOM.qs('input[name="time_format"]:checked') as HTMLInputElement;
    const time_format_custom_value = DOM.qid('time_format_custom_value') as HTMLInputElement;
    const time_zone = DOM.qs('input[name="time_zone"]:checked') as HTMLInputElement;
    const time_zone_fixed_offset = DOM.qid('time_zone_fixed_offset') as HTMLInputElement;

    return {
      form_preview_align: form_preview_align.value,
      time_locale: time_locale.value,
      time_locale_custom_value: time_locale_custom_value.value,
      time_zone: time_zone.value,
      time_zone_fixed_offset: Number(time_zone_fixed_offset.value),
      time_format: time_format.value,
      time_format_custom_value: time_format_custom_value.value,
    };
  }
}
