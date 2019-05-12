import { LocalStorage } from '.';

interface SettingsData {
  [key: string]: any,
}

const defaultSettings: SettingsData = {
  'filter.remove-hidden-posts': false,
  'filter.hidden-authors': [],
  'filter.hidden-posts': [],
  'filter.hidden-files': [],
  'filter.hide-threads': false,
  'post.enable-thread-autoupdate': true,
  'post.scroll-to-new-posts': true,
  'post.reflink-icon-position': 'header',
  'image.nsfw': false,
  'image.show-video-overlay': false,
  'image.hide-popup-on-outside-click': false,
  'image.auto-play': true,
  'image.replace-thumbnail': false,
  'image.replace-thumbnail-gif': false,
  'image.expand-images': 'popup',
  'link.add-names-to-links': true,
  'link.add-you-to-links': true,
  'link.show-post-popups': true,
  'form.scroll-bottom': true,
  'form.save-subject': false,
  'form.save-name': true,
  'form.show-markup': true,
  'form.show-markup-mobile': false,
  'form.save-form-state': false,
  'form.align': 'center',
  'form.preview-align': 'right',
  'form.replaces': [],
  'form.insert-tags-in-pairs': true,
  'time.locale': 'default',
  'time.locale-custom': 'en',
  'time.format': 'default',
  'time.format-custom': 'EEE, dd MMM yyyy HH:mm:ss',
  'time.zone': 'default',
  'time.zone-fixed': 0,
  'common.smooth-scroll': true,
  'common.show-unread-count-in-title': false,
  'common.layout': 'left',
};

export class Settings {
  static get<T>(key: string): T {
    return LocalStorage.get(key, defaultSettings[key] as T);
  }

  static set<T>(key: string, value: T): T {
    return LocalStorage.set(key, value);
  }
}
