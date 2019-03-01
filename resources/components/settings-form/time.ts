import { DateTime } from 'luxon';
import Vue from 'vue';

import Checkbox from '../checkbox.vue';
import RadioButton from '../radio-button.vue';

import { Time } from '../../ts/utils';

export default Vue.extend({
  props: ['settings'],
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
    updateTime() {
      try {
        const time = DateTime.fromJSDate(new Date());
        this.time = Time.format(time, this.settings);
      }
      catch {
        this.time = 'Invalid format';
      }
    },
  },
  components: {
    'x-checkbox': Checkbox,
    'x-radio-button': RadioButton,
  },
});
