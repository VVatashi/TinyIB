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
      newAuthor: {
        name: '',
        tripcode: '',
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
    removeAuthorAt(index: number) {
      const posts = Settings.get('common.hidden-posts', []);
      posts.splice(index, 1);
      Settings.set('common.hidden-posts', posts);
    },
    addAuthor(item: { name: string, tripcode: string }) {
      const posts = Settings.get('common.hidden-posts', []);
      posts.push({ ...item });
      Settings.set('common.hidden-posts', posts);

      this.newAuthor = { name: '', tripcode: '' };
    },
  },
  computed: {
    layout: {
      get: function () { return this.get('common.layout', 'left'); },
      set: function (value: string) { this.set('common.layout', value); },
    },
    showPostHeaderReflinkIcon: {
      get: function () { return this.get('common.show-post-header-reflink-icon', true); },
      set: function (value: boolean) { this.set('common.show-post-header-reflink-icon', value); },
    },
    showPostReflinkIcon: {
      get: function () { return this.get('common.show-post-reflink-icon', false); },
      set: function (value: boolean) { this.set('common.show-post-reflink-icon', value); },
    },
    scrollToNewPosts: {
      get: function () { return this.get('common.scroll-to-new-posts', true); },
      set: function (value: boolean) { this.set('common.scroll-to-new-posts', value); },
    },
    smoothScroll: {
      get: function () { return this.get('common.smooth-scroll', true); },
      set: function (value: boolean) { this.set('common.smooth-scroll', value); },
    },
    showVideoOverlay: {
      get: function () { return this.get('common.show-video-overlay', false); },
      set: function (value: boolean) { this.set('common.show-video-overlay', value); },
    },
    hidePopupOnOutsideClick: {
      get: function () { return this.get('common.hide-popup-on-outside-click', false); },
      set: function (value: boolean) { this.set('common.hide-popup-on-outside-click', value); },
    },
    nsfw: {
      get: function () { return this.get('common.nsfw', false); },
      set: function (value: boolean) { this.set('common.nsfw', value); },
    },
    enableThreadAutoupdate: {
      get: function () { return this.get('common.enable-thread-autoupdate', true); },
      set: function (value: boolean) { this.set('common.enable-thread-autoupdate', value); },
    },
    addNamesToLinks: {
      get: function () { return this.get('common.add-names-to-links', true); },
      set: function (value: boolean) { this.set('common.add-names-to-links', value); },
    },
    addYouToLinks: {
      get: function () { return this.get('common.add-you-to-links', true); },
      set: function (value: boolean) { this.set('common.add-you-to-links', value); },
    },
    hiddenPosts: function () { return this.get('common.hidden-posts', []); },
    removeHiddenPosts: {
      get: function () { return this.get('common.remove-hidden-posts', false); },
      set: function (value: boolean) { this.set('common.remove-hidden-posts', value); },
    },
    showPostPopups: {
      get: function () { return this.get('common.show-post-popups', true); },
      set: function (value: boolean) { this.set('common.show-post-popups', value); },
    },
    autoPlay: {
      get: function () { return this.get('common.auto-play', true); },
      set: function (value: boolean) { this.set('common.auto-play', value); },
    },
    showUnreadCountInTitle: {
      get: function () { return this.get('common.show-unread-count-in-title', false); },
      set: function (value: boolean) { this.set('common.show-unread-count-in-title', value); },
    },
  }
});
