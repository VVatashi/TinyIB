import { LocalStorage } from './local-storage';

export interface HotKey {
  readonly code: string;
  readonly ctrl?: boolean;
  readonly alt?: boolean;
  readonly shift?: boolean;
}

export interface HotKeys {
  readonly [key: string]: HotKey;
}

const defaultHotKeys: HotKeys = {
  closeMedia: { code: 'Escape' },
  previousMedia: { code: 'ArrowLeft', ctrl: true },
  nextMedia: { code: 'ArrowRight', ctrl: true },
  previousPost: { code: 'KeyK' },
  nextPost: { code: 'KeyJ' },
  toggleHide: { code: 'KeyH' },
  toggleFile: { code: 'KeyI' },
  toggleSettings: { code: 'KeyS', alt: true },
  toggleNSFW: { code: 'KeyB' },
  updateThread: { code: 'KeyU' },
  reply: { code: 'KeyR' },
  send: { code: 'Enter', ctrl: true },
};

export class HotKeys {
  public static readonly key = 'hotkeys';

  public static load(): HotKeys {
    const hotKeysData = LocalStorage.get<string>(HotKeys.key, '{}');
    return { ...defaultHotKeys, ...JSON.parse(hotKeysData) };
  }

  public static save(hotKeys: HotKeys): HotKeys {
    const hotKeysData = JSON.stringify(hotKeys);
    LocalStorage.set(HotKeys.key, hotKeysData);
    return hotKeys;
  }

  public static check(hotKey: HotKey, event: KeyboardEvent): boolean {
    if (hotKey.code !== event.code) {
      return false;
    }

    if (!!hotKey.ctrl !== event.ctrlKey) {
      return false;
    }

    if (!!hotKey.alt !== event.altKey) {
      return false;
    }

    if (!!hotKey.shift !== event.shiftKey) {
      return false;
    }

    return true;
  }
}

export default HotKeys;
