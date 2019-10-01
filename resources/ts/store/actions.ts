import { HotKeys, HotKey } from '../hotkeys';
import {
  SET_HOTKEY,
  SET_OPTION,
  HotKeyActionTypes,
  SettingsActionTypes,
} from './types';
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
