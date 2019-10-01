import { HotKeys, HotKey } from '../hotkeys';
import { Settings } from '../settings';

export interface HotKeysState {
  readonly hotKeys: HotKeys;
}

export interface SettingsState {
  readonly settings: Settings;
}

export const SET_HOTKEY = 'SET_HOTKEY';
export const SET_OPTION = 'SET_OPTION';

interface SetHotKeyAction {
  type: typeof SET_HOTKEY;
  payload: {
    readonly actionName: string;
    readonly hotKey: HotKey;
  };
}

interface SetOptionAction {
  type: typeof SET_OPTION;
  payload: {
    readonly key: string;
    readonly value: any;
  };
}

export type HotKeyActionTypes = SetHotKeyAction;
export type SettingsActionTypes = SetOptionAction;
