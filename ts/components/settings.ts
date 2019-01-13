import { DateTime } from 'luxon';
import Vue from 'vue';
import { eventBus, Events, SettingsInterface } from '..';
import { Cookie, DOM, Time } from '../utils';

export class Settings {
  protected readonly settings: SettingsInterface;
  protected viewModel: Vue;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const settingsForm = DOM.qid('settings_form');
    if (!settingsForm) {
      return;
    }

    this.viewModel = new Vue({
      el: '#settings_form',
      template: `
<div class="content__settings-form settings-form" id="settings_form">
  <h3 class="settings-form__section-title">Form settings</h3>
  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">File preview</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="form_preview_align_right" name="form_preview_align"
        value="right" v-model="settings.formPreviewAlign" />

      <label class="settings-form__label" for="form_preview_align_right">On the right</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="form_preview_align_left" name="form_preview_align"
        value="left" v-model="settings.formPreviewAlign" />

      <label class="settings-form__label" for="form_preview_align_left">On the left</label>
    </p>
  </fieldset>

  <h3 class="settings-form__section-title">Time settings</h3>
  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Language</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_locale_default" name="time_locale"
        value="default" v-model="settings.timeLocale" />
      <label class="settings-form__label" for="time_locale_default">Browser default</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_locale_custom" name="time_locale"
        value="custom" v-model="settings.timeLocale" />
      <label class="settings-form__label" for="time_locale_custom">Custom</label>

      <input class="input settings-form__text" type="text" v-on:click="settings.timeLocale = 'custom'"
        v-model="settings.timeLocaleCustomValue" placeholder="en" />
    </p>
  </fieldset>

  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Format</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_format_default" name="time_format"
        value="default" v-model="settings.timeFormat" />

      <label class="settings-form__label" for="time_format_default">Browser default</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_format_custom" name="time_format"
        value="custom" v-model="settings.timeFormat" />

      <label class="settings-form__label" for="time_format_custom">Custom</label>

      <input class="input settings-form__text" type="text" v-on:click="settings.timeFormat = 'custom'"
        v-model="settings.timeFormatCustomValue" placeholder="EEE, dd MMM yyyy HH:mm:ss" />
    </p>

    <p>See the <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">luxon documentation</a> for the custom tokens reference.</p>
  </fieldset>

  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Time zone</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_zone_default" name="time_zone"
        value="default" v-model="settings.timeZone" />

      <label class="settings-form__label" for="time_zone_default">Browser default</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_zone_fixed" name="time_zone"
        value="fixed" v-model="settings.timeZone" />

      <label class="settings-form__label" for="time_zone_fixed">Fixed UTC offset</label>

      <input class="input settings-form__text" type="number" v-on:click="settings.timeZone = 'fixed'"
        v-model="settings.timeZoneFixedOffset" min="-99" max="99" />
    </p>
  </fieldset>

  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Current format</legend>

    <p class="settings-form__row">{{ time }}</p>
  </fieldset>

  <p class="settings-form__status" id="status">{{ status }}</p>

  <p class="settings-form__buttons">
    <button class="button settings-form__save" type="button"
      v-on:click.prevent="saveSettings()">Save</button>
  </p>
</div>`,
      data() {
        return {
          settings: {
            formPreviewAlign: 'right',
            timeLocale: 'default',
            timeLocaleCustomValue: '',
            timeFormat: 'default',
            timeFormatCustomValue: '',
            timeZone: 'default',
            timeZoneFixedOffset: 0,
          },
          time: '',
          status: '',
        };
      },
      created() {
        // Load settings from a cookie
        const settingsStr = Cookie.get('settings', '{}');
        const settings = JSON.parse(settingsStr);
        this.settings = { ...this.settings, ...settings };
        this._timer = setInterval(this.updateTime.bind(this), 1000);
      },
      destroyed() {
        if (this._timer) {
          clearInterval(this._timer);
        }
      },
      methods: {
        updateTime() {
          try {
            const time = DateTime.fromJSDate(new Date());
            this.time = Time.format(time, this.settings);
          }
          catch {
            this.time = 'Invalid format';
          }
        },
        saveSettings() {
          const expire = new Date();
          // One year.
          expire.setTime(expire.getTime() + 365 * 24 * 60 * 60 * 1000);
          Cookie.set('settings', JSON.stringify(this.settings), expire);

          // Indicate that settings are saved.
          this.status = '';
          setTimeout(() => {
            this.status = 'Settings saved.';
          }, 1000 / 3);
        },
      },
    });
  }
}
