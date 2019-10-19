import { LocalStorage } from './local-storage';

export interface PostAuthor {
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

export interface Replace {
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

export const defaultSettings: Settings = {
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
    modalAtTop: true,
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
    showUnreadCountInTitle: true,
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
    const settingsData = LocalStorage.get<string>(this.key, '{}');
    return this.merge(defaultSettings, JSON.parse(settingsData));
  }

  public static save(settings: Settings): Settings {
    const settingsData = JSON.stringify(settings);
    LocalStorage.set(this.key, settingsData);
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
}

export default Settings;
