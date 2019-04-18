import Vue from 'vue';

import Common from './settings-form/common.vue';
import Form from './settings-form/form.vue';
import Time from './settings-form/time.vue';

export default Vue.extend({
  data() {
    return {
      tab: 'common',
      status: '',
    };
  },
  components: {
    'x-common': Common,
    'x-form': Form,
    'x-time': Time,
  },
});
