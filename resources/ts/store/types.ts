import { HotKeys, HotKey } from '../hotkeys';
import { Settings } from '../settings';

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

export interface CustomNotify {
  readonly name: string;
  readonly file: string;
}

export interface SettingsState {
  readonly settings: Settings;
  readonly customPostNotify: CustomNotify;
  readonly customReplyNotify: CustomNotify;
}

export const SET_OPTION = 'SET_OPTION';
export const SET_POST_NOTIFY = 'SET_POST_NOTIFY';
export const SET_REPLY_NOTIFY = 'SET_REPLY_NOTIFY';

interface SetOptionAction {
  type: typeof SET_OPTION;
  payload: {
    readonly key: string;
    readonly value: any;
  };
}

interface SetPostNotifyAction {
  type: typeof SET_POST_NOTIFY;
  payload: CustomNotify;
}

interface SetReplyNotifyAction {
  type: typeof SET_REPLY_NOTIFY;
  payload: CustomNotify;
}

export type SettingsActionTypes = SetOptionAction
  | SetPostNotifyAction | SetReplyNotifyAction;
