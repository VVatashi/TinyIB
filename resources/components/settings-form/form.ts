import Vue from 'vue';

import Checkbox from '../checkbox.vue';
import RadioButton from '../radio-button.vue';

import { Replace } from '../../ts/settings';

export default Vue.extend({
  components: {
    'x-checkbox': Checkbox,
    'x-radio-button': RadioButton,
  },
  props: ['settings'],
  data() {
    return {
      newReplace: {
        pattern: '',
        replace: '',
      },
    };
  },
  methods: {
    removeReplaceAt(index: number) {
      this.settings.form.replaces.splice(index, 1);
    },
    addReplace(item: Replace) {
      try {
        new RegExp(item.pattern, 'gm');
      } catch (e) {
        this.status = `Invalid regular expression: ${e.message}`;
        return;
      }

      this.settings.form.replaces.push({ ...item });
      this.newReplace = { pattern: '', replace: '' };
    },
  },
});
