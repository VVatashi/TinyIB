import Vue from 'vue';

import Checkbox from '../checkbox.vue';
import RadioButton from '../radio-button.vue';
import { PostAuthor } from '../../ts/settings';

export default Vue.extend({
  components: {
    'x-checkbox': Checkbox,
    'x-radio-button': RadioButton,
  },
  props: ['settings'],
  data() {
    return {
      newAuthor: {
        name: '',
        tripcode: '',
      } as PostAuthor,
    };
  },
  methods: {
    removeAuthorAt(index: number) {
      this.settings.common.hiddenPosts.splice(index, 1);
    },
    addAuthor(item: PostAuthor) {
      this.settings.common.hiddenPosts.push({ ...item });
      this.newAuthor = { name: '', tripcode: '' };
    },
  },
});
