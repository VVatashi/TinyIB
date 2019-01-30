import Vue from 'vue';

import Checkbox from '../checkbox.vue';
import RadioButton from '../radio-button.vue';

export default Vue.extend({
  props: ['settings'],
  components: {
    'x-checkbox': Checkbox,
    'x-radio-button': RadioButton,
  },
});
