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
  readonly mode: NotifyMode;
  readonly interval: number;
  readonly type: NotifyType;
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
  readonly pattern: string;
  readonly replace: string;
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
  readonly filter: {
    readonly removeHiddenPosts: boolean;
    readonly hiddenAuthors: PostAuthor[];
    readonly hiddenPosts: number[];
    readonly hiddenFiles: string[];
    readonly hideThreads: boolean;
  };

  readonly post: {
    readonly enableThreadAutoupdate: boolean;
    readonly disableWebSockets: boolean;
    readonly scrollToNewPosts: boolean;
    readonly reflinkIconPosition: RefLinkPosition;
    readonly showSpoilers: boolean;
    readonly disableSub: boolean;
    readonly unreadPostsNotify: Notify;
    readonly unreadRepliesNotify: Notify;
  };

  readonly image: {
    readonly nsfw: boolean;
    readonly showVideoOverlay: boolean;
    readonly hidePopupOnOutsideClick: boolean;
    readonly autoPlay: boolean;
    readonly replaceThumbnail: boolean;
    readonly replaceThumbnailGif: boolean;
    readonly expandImages: ImageExpandMode;
    readonly modalAtTop: boolean;
  };

  readonly link: {
    readonly addNamesToLinks: boolean;
    readonly addYouToLinks: boolean;
    readonly showPostPopups: boolean;
  };

  readonly form: {
    readonly saveSubject: boolean;
    readonly saveName: boolean;
    readonly showMarkup: boolean;
    readonly saveFormState: boolean;
    readonly align: FormAlign;
    readonly previewAlign: PreviewAlign;
    readonly replaces: Replace[];
    readonly insertTagsInPairs: boolean;
  };

  readonly time: {
    readonly locale: TimeLocale;
    readonly localeCustom: string;
    readonly format: TimeFormat;
    readonly formatCustom: string;
    readonly zone: TimeZone;
    readonly zoneFixed: number;
  };

  readonly common: {
    readonly smoothScroll: boolean;
    readonly showUnreadCountInTitle: boolean;
    readonly layout: Layout;
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

const SETTINGS_KEY = 'settings';

export class Settings {
  public static merge(a: Settings, b: Settings) {
    return merge(a, b);
  }

  public static load(): Settings {
    const settingsData = LocalStorage.get<string>(SETTINGS_KEY, '{}');
    return this.merge(defaultSettings, JSON.parse(settingsData));
  }

  public static save(settings: Settings): Settings {
    const settingsData = JSON.stringify(settings);
    LocalStorage.set(SETTINGS_KEY, settingsData);
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
