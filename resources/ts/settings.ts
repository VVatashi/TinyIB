import { LocalStorage } from './local-storage';

interface PostAuthor {
  name: string;
  tripcode: string;
}

const enum NotifyMode {
  Disable = 'disable',
  Once = 'once',
  EveryPost = 'every-post',
  Repeat = 'repeat',
}

const enum NotifyType {
  Default1 = 'default-1',
  Default2 = 'default-2',
  Custom = 'custom',
}

interface Notify {
  mode: NotifyMode;
  interval: number;
  type: NotifyType;
}

const enum RefLinkPosition {
  Header = 'header',
  Post = 'post',
}

const enum ImageExpandMode {
  Tab = 'tab',
  Post = 'post',
  Popup = 'popup',
}

const enum FormAlign {
  Left = 'left',
  Center = 'center',
}

const enum PreviewAlign {
  Left = 'left',
  Right = 'right',
}

interface Replace {
  pattern: string;
  replace: string;
}

const enum Layout {
  Left = 'left',
  Center = 'center',
}

const enum TimeLocale {
  Default = 'default',
  Custom = 'custom',
}

const enum TimeFormat {
  Default = 'default',
  Custom = 'custom',
}

const enum TimeZone {
  Default = 'default',
  Fixed = 'fixed',
}

export interface Settings {
  filter: {
    removeHiddenPosts: boolean;
    hiddenAuthors: PostAuthor[];
    hiddenPosts: number[];
    hiddenFiles: string[];
    hideThreads: boolean;
  };

  post: {
    enableThreadAutoupdate: boolean;
    disableWebSockets: boolean;
    scrollToNewPosts: boolean;
    reflinkIconPosition: RefLinkPosition;
    showSpoilers: boolean;
    disableSub: boolean;
    unreadPostsNotify: Notify;
    unreadRepliesNotify: Notify;
  };

  image: {
    nsfw: boolean;
    showVideoOverlay: boolean;
    hidePopupOnOutsideClick: boolean;
    autoPlay: boolean;
    replaceThumbnail: boolean;
    replaceThumbnailGif: boolean;
    expandImages: ImageExpandMode;
    modalAtTop: boolean;
  };

  link: {
    addNamesToLinks: boolean;
    addYouToLinks: boolean;
    showPostPopups: boolean;
  };

  form: {
    saveSubject: boolean;
    saveName: boolean;
    showMarkup: boolean;
    saveFormState: boolean;
    align: FormAlign;
    previewAlign: PreviewAlign;
    replaces: Replace[];
    insertTagsInPairs: boolean;
  };

  time: {
    locale: TimeLocale;
    localeCustom: string;
    format: TimeFormat;
    formatCustom: string;
    zone: TimeZone;
    zoneFixed: number;
  };

  common: {
    smoothScroll: boolean;
    showUnreadCountInTitle: boolean;
    layout: Layout;
  };
}

const defaultSettings: Settings = {
  filter: {
    removeHiddenPosts: false,
    hiddenAuthors: [],
    hiddenPosts: [],
    hiddenFiles: [],
    hideThreads: false,
  },
  post: {
    enableThreadAutoupdate: true,
    disableWebSockets: false,
    scrollToNewPosts: true,
    reflinkIconPosition: RefLinkPosition.Header,
    showSpoilers: false,
    disableSub: false,
    unreadPostsNotify: {
      mode: NotifyMode.Disable,
      interval: 10,
      type: NotifyType.Default1,
    },
    unreadRepliesNotify: {
      mode: NotifyMode.Disable,
      interval: 10,
      type: NotifyType.Default1,
    },
  },
  image: {
    nsfw: false,
    showVideoOverlay: false,
    hidePopupOnOutsideClick: false,
    autoPlay: true,
    replaceThumbnail: false,
    replaceThumbnailGif: false,
    expandImages: ImageExpandMode.Popup,
    modalAtTop: false,
  },
  link: {
    addNamesToLinks: true,
    addYouToLinks: true,
    showPostPopups: true,
  },
  form: {
    saveSubject: false,
    saveName: true,
    showMarkup: true,
    saveFormState: false,
    align: FormAlign.Center,
    previewAlign: PreviewAlign.Right,
    replaces: [],
    insertTagsInPairs: true,
  },
  time: {
    locale: TimeLocale.Default,
    localeCustom: 'en',
    format: TimeFormat.Default,
    formatCustom: 'EEE, dd MMM yyyy HH:mm:ss',
    zone: TimeZone.Default,
    zoneFixed: 0,
  },
  common: {
    smoothScroll: true,
    showUnreadCountInTitle: false,
    layout: Layout.Left,
  },
};

function isObject(item: any) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function merge(target: any, source: any) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    const keys = Object.keys(source);
    keys.forEach(key => {
      if (isObject(source[key])) {
        output[key] = key in target ? merge(target[key], source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

export class Settings {
  public static readonly key = 'settings';

  public static merge(a: Settings, b: Settings) {
    return merge(a, b);
  }

  public static load(): Settings {
    const settingsData = LocalStorage.get<string>(Settings.key, '{}');
    return this.merge(defaultSettings, JSON.parse(settingsData));
  }

  public static save(settings: Settings): Settings {
    const settingsData = JSON.stringify(settings);
    LocalStorage.set(Settings.key, settingsData);
    return settings;
  }

  public static get(settings: Settings, key: string): any {
    return key.split('.').reduce((obj, key) => (obj || {})[key], settings as any);
  }

  public static set(settings: Settings, key: string, value: any): Settings {
    const result = { ...settings };
    key.split('.').reduce((obj, key, index, arr) => {
      if (key in obj && isObject(obj[key])) {
        return obj[key];
      } else {
        return obj[key] = index === arr.length - 1 ? value : {};
      }
    }, result as any);

    return result;
  }

  // TODO: remove it later and replace with load()
  public static migrate(): Settings {
    if (!LocalStorage.has('filter.remove-hidden-posts')) {
      return this.load();
    }

    const settings: Settings = {
      filter: {
        removeHiddenPosts: LocalStorage.remove('filter.remove-hidden-posts'),
        hiddenAuthors: LocalStorage.remove('filter.hidden-authors'),
        hiddenPosts: LocalStorage.remove('filter.hidden-posts'),
        hiddenFiles: LocalStorage.remove('filter.hidden-files'),
        hideThreads: LocalStorage.remove('filter.hide-threads'),
      },
      post: {
        enableThreadAutoupdate: LocalStorage.remove('post.enable-thread-autoupdate'),
        disableWebSockets: LocalStorage.remove('post.disable-web-sockets'),
        scrollToNewPosts: LocalStorage.remove('post.scroll-to-new-posts'),
        reflinkIconPosition: LocalStorage.remove('post.reflink-icon-position'),
        showSpoilers: LocalStorage.remove('post.show-spoilers'),
        disableSub: LocalStorage.remove('post.disable-sub'),
        unreadPostsNotify: {
          mode: LocalStorage.remove('post.unread-posts-notify'),
          interval: LocalStorage.remove('post.unread-posts-notify-interval'),
          type: LocalStorage.remove('post.unread-posts-notify-type'),
        },
        unreadRepliesNotify: {
          mode: LocalStorage.remove('post.unread-replies-notify'),
          interval: LocalStorage.remove('post.unread-replies-notify-interval'),
          type: LocalStorage.remove('post.unread-replies-notify-type'),
        },
      },
      image: {
        nsfw: LocalStorage.remove('image.nsfw'),
        showVideoOverlay: LocalStorage.remove('image.show-video-overlay'),
        hidePopupOnOutsideClick: LocalStorage.remove('image.hide-popup-on-outside-click'),
        autoPlay: LocalStorage.remove('image.auto-play'),
        replaceThumbnail: LocalStorage.remove('image.replace-thumbnail'),
        replaceThumbnailGif: LocalStorage.remove('image.replace-thumbnail-gif'),
        expandImages: LocalStorage.remove('image.expand-images'),
        modalAtTop: LocalStorage.remove('image.modal-at-top'),
      },
      link: {
        addNamesToLinks: LocalStorage.remove('link.add-names-to-links'),
        addYouToLinks: LocalStorage.remove('link.add-you-to-links'),
        showPostPopups: LocalStorage.remove('link.show-post-popups'),
      },
      form: {
        saveSubject: LocalStorage.remove('form.save-subject'),
        saveName: LocalStorage.remove('form.save-name'),
        showMarkup: LocalStorage.remove('form.show-markup'),
        saveFormState: LocalStorage.remove('form.save-form-state'),
        align: LocalStorage.remove('form.align'),
        previewAlign: LocalStorage.remove('form.preview-align'),
        replaces: LocalStorage.remove('form.replaces'),
        insertTagsInPairs: LocalStorage.remove('form.insert-tags-in-pairs'),
      },
      time: {
        locale: LocalStorage.remove('time.locale'),
        localeCustom: LocalStorage.remove('time.locale-custom'),
        format: LocalStorage.remove('time.format'),
        formatCustom: LocalStorage.remove('time.format-custom'),
        zone: LocalStorage.remove('time.zone'),
        zoneFixed: LocalStorage.remove('time.zone-fixed'),
      },
      common: {
        smoothScroll: LocalStorage.remove('common.smooth-scroll'),
        showUnreadCountInTitle: LocalStorage.remove('common.show-unread-count-in-title'),
        layout: LocalStorage.remove('common.layout'),
      },
    };

    return this.save(settings);
  }
}
