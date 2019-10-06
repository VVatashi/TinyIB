import {
  SET_HOTKEY,
  SET_OPTION,
  HotKeyActionTypes,
  SET_POST_NOTIFY,
  SET_REPLY_NOTIFY,
  SettingsActionTypes,
} from './types';
import { HotKeys, HotKey } from '../hotkeys';
import { LocalStorage } from '../local-storage';
import { Settings } from '../settings';

export function setHotKey(actionName: string, hotKey: HotKey): HotKeyActionTypes {
  HotKeys.save({
    ...HotKeys.load(),
    [actionName]: hotKey,
  });

  return {
    type: SET_HOTKEY,
    payload: {
      actionName,
      hotKey,
    },
  };
}

export function setOption(key: string, value: any): SettingsActionTypes {
  let settings = Settings.load();
  settings = Settings.set(settings, key, value);
  Settings.save(settings);

  return {
    type: SET_OPTION,
    payload: {
      key,
      value,
    },
  };
}

export function setPostNotify(name: string, file: string): SettingsActionTypes {
  LocalStorage.set('post.unreadPostsNotifyName', name);
  LocalStorage.set('post.unreadPostsNotifyFile', file);

  return {
    type: SET_POST_NOTIFY,
    payload: {
      name,
      file,
    },
  };
}

export function setReplyNotify(name: string, file: string): SettingsActionTypes {
  LocalStorage.set('post.unreadRepliesNotifyName', name);
  LocalStorage.set('post.unreadRepliesNotifyFile', file);

  return {
    type: SET_REPLY_NOTIFY,
    payload: {
      name,
      file,
    },
  };
}
