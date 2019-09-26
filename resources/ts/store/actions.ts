import { HotKeys, HotKey } from '../hotkeys';
import { HotKeyActionTypes, SET_HOTKEY } from './types';

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
