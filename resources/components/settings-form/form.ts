import Vue from 'vue';

import Checkbox from '../checkbox.vue';
import RadioButton from '../radio-button.vue';

import { Settings } from '../../ts/services';

export default Vue.extend({
  components: {
    'x-checkbox': Checkbox,
    'x-radio-button': RadioButton,
  },
  data() {
    return {
      newReplace: {
        pattern: '',
        replace: '',
      },
    };
  },
  methods: {
    get<T>(key: string, defaultValue: T = null): T {
      return Settings.get(key, defaultValue);
    },
    set<T>(key: string, value: T): T {
      return Settings.set(key, value);
    },
    removeReplaceAt(index: number) {
      const replaces = Settings.get('form.replaces', []);
      replaces.splice(index, 1);
      Settings.set('form.replaces', replaces);
    },
    addReplace(item: { pattern: string, replace: string }) {
      try {
        new RegExp(item.pattern, 'gm');
      } catch (e) {
        this.status = `Invalid regular expression: ${e.message}`;
        return;
      }

      const replaces = Settings.get('form.replaces', []);
      replaces.push({ ...item });
      Settings.set('form.replaces', replaces);

      this.newReplace = { pattern: '', replace: '' };
    },
  },
  computed: {
    scrollBottom: {
      get: function () { return this.get('form.scroll-bottom', true); },
      set: function (value: boolean) { this.set('form.scroll-bottom', value); },
    },
    saveSubject: {
      get: function () { return this.get('form.save-subject', false); },
      set: function (value: boolean) { this.set('form.save-subject', value); },
    },
    saveName: {
      get: function () { return this.get('form.save-name', true); },
      set: function (value: boolean) { this.set('form.save-name', value); },
    },
    saveFormState: {
      get: function () { return this.get('form.save-form-state', true); },
      set: function (value: boolean) { this.set('form.save-form-state', value); },
    },
    align: {
      get: function () { return this.get('form.align', 'center'); },
      set: function (value: string) { this.set('form.align', value); },
    },
    previewAlign: {
      get: function () { return this.get('form.preview-align', 'right'); },
      set: function (value: string) { this.set('form.preview-align', value); },
    },
    showMarkup: {
      get: function () { return this.get('form.show-markup', true); },
      set: function (value: boolean) { this.set('form.show-markup', value); },
    },
    showMarkupMobile: {
      get: function () { return this.get('form.show-markup-mobile', false); },
      set: function (value: boolean) { this.set('form.show-markup-mobile', value); },
    },
    insertTagsInPairs: {
      get: function () { return this.get('form.insert-tags-in-pairs', true); },
      set: function (value: boolean) { this.set('form.insert-tags-in-pairs', value); },
    },
    replaces: function () { return this.get('form.replaces', []); },
  },
});
