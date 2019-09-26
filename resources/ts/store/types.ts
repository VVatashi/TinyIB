import { HotKeys, HotKey } from '../hotkeys';

export interface HotKeysState {
  readonly hotKeys: HotKeys;
}

export const SET_HOTKEY = 'SET_HOTKEY';

interface SetHotKeyAction {
  type: typeof SET_HOTKEY;
  payload: {
    readonly actionName: string;
    readonly hotKey: HotKey;
  };
}

export type HotKeyActionTypes = SetHotKeyAction;
