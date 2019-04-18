import { DateTime } from 'luxon';
import Vue from 'vue';

import Checkbox from '../checkbox.vue';
import RadioButton from '../radio-button.vue';

import { Settings } from '../../ts/services';
import { Time } from '../../ts/utils';

export default Vue.extend({
  components: {
    'x-checkbox': Checkbox,
    'x-radio-button': RadioButton,
  },
  data() {
    return {
      time: '',
    };
  },
  created() {
    this._timer = setInterval(this.updateTime.bind(this), 1000);
  },
  destroyed() {
    if (this._timer) {
      clearInterval(this._timer);
    }
  },
  methods: {
    get<T>(key: string, defaultValue: T = null): T {
      return Settings.get(key, defaultValue);
    },
    set<T>(key: string, value: T): T {
      return Settings.set(key, value);
    },
    updateTime() {
      try {
        const time = DateTime.fromJSDate(new Date());
        this.time = Time.format(time);
      }
      catch {
        this.time = 'Invalid format';
      }
    },
  },
  computed: {
    locale: {
      get: function () { return this.get('form.locale', 'default'); },
      set: function (value: string) { this.set('form.locale', value); },
    },
    localeCustom: {
      get: function () { return this.get('form.locale-custom', 'en'); },
      set: function (value: string) { this.set('form.locale-custom', value); },
    },
    format: {
      get: function () { return this.get('form.format', 'default'); },
      set: function (value: string) { this.set('form.format', value); },
    },
    formatCustom: {
      get: function () { return this.get('form.format-custom', 'd.LL.yyyy HH:mm:ss'); },
      set: function (value: string) { this.set('form.format-custom', value); },
    },
    zone: {
      get: function () { return this.get('form.zone', 'default'); },
      set: function (value: string) { this.set('form.zone', value); },
    },
    zoneFixed: {
      get: function () { return this.get('form.zone-fixed', 0); },
      set: function (value: number) { this.set('form.zone-fixed', value); },
    },
  },
});
