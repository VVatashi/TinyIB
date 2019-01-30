import Vue from 'vue';

export default Vue.extend({
  model: {
    prop: 'selectedValue',
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
    value: String,
    selectedValue: String,
  },
  methods: {
    onInput(e: Event) {
      this.$emit('change', this.value);
    },
  },
});
