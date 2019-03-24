import Vue from 'vue';

import Common from './settings-form/common.vue';
import Form from './settings-form/form.vue';
import Time from './settings-form/time.vue';

import { SettingsManager } from '../ts';

export default Vue.extend({
  data() {
    return {
      settings: null,
      tab: 'common',
      status: '',
    };
  },
  created() {
    this.settings = SettingsManager.load();
  },
  methods: {
    saveSettings() {
      SettingsManager.save(this.settings);

      // Indicate that settings are saved.
      this.status = '';
      setTimeout(() => {
        this.status = 'Settings saved.';
      }, 1000 / 3);
    },
  },
  components: {
    'x-common': Common,
    'x-form': Form,
    'x-time': Time,
  },
});
