import Vue from 'vue';

export default Vue.extend({
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    labelClass: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(e: Event) {
      this.$emit('change', !this.checked);
    },
  },
});
