import {
  SettingsState,
  SettingsActionTypes,
  TOGGLE_POPUP,
  SET_OPTION,
  SET_HOTKEY,
  SET_POST_NOTIFY,
  SET_REPLY_NOTIFY,
} from './types';
import { Settings, defaultSettings } from '../settings';

const settingsInitialState: SettingsState = {
  showPopup: false,
  settings: defaultSettings,
  hotKeys: {},
  customPostNotify: {
    name: '',
    file: '',
  },
  customReplyNotify: {
    name: '',
    file: '',
  },
}

export function settingsReducer(
  state = settingsInitialState,
  action: SettingsActionTypes
): SettingsState {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        showPopup: !state.showPopup,
      };

    case SET_OPTION: {
      const { key, value } = action.payload;
      const settings = Settings.set(state.settings, key, value);

      return {
        ...state,
        settings,
      };
    }

    case SET_HOTKEY: {
      const { actionName, hotKey } = action.payload;
      const hotKeys = {
        ...state.hotKeys,
        [actionName]: hotKey,
      };

      return {
        ...state,
        hotKeys,
      };
    }

    case SET_POST_NOTIFY:
      return {
        ...state,
        customPostNotify: action.payload,
      };

    case SET_REPLY_NOTIFY:
      return {
        ...state,
        customReplyNotify: action.payload,
      };

    default:
      return state;
  }
}
