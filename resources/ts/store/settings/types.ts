import { HotKeys, HotKey } from '../../hotkeys';
import { Settings } from '../../settings';

export interface CustomNotify {
  readonly name: string;
  readonly file: string;
}

export interface SettingsState {
  readonly showPopup: boolean;
  readonly settings: Settings;
  readonly hotKeys: HotKeys;
  readonly customPostNotify: CustomNotify;
  readonly customReplyNotify: CustomNotify;
}

export const TOGGLE_POPUP = 'TOGGLE_POPUP';
export const SET_OPTION = 'SET_OPTION';
export const SET_HOTKEY = 'SET_HOTKEY';
export const SET_POST_NOTIFY = 'SET_POST_NOTIFY';
export const SET_REPLY_NOTIFY = 'SET_REPLY_NOTIFY';

interface TogglePopupAction {
  type: typeof TOGGLE_POPUP;
  payload: {};
}

interface SetOptionAction {
  type: typeof SET_OPTION;
  payload: {
    readonly key: string;
    readonly value: any;
  };
}

interface SetHotKeyAction {
  type: typeof SET_HOTKEY;
  payload: {
    readonly actionName: string;
    readonly hotKey: HotKey;
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

export type SettingsActionTypes =
  | TogglePopupAction
  | SetOptionAction
  | SetHotKeyAction
  | SetPostNotifyAction
  | SetReplyNotifyAction;
