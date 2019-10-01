import {
  HotKeysState,
  SettingsState,
  HotKeyActionTypes,
  SettingsActionTypes,
  SET_HOTKEY,
  SET_OPTION,
} from './types';
import { Settings, defaultSettings } from '../settings';

const hotKeysInitialState: HotKeysState = {
  hotKeys: {},
}

export function hotKeysReducer(
  state = hotKeysInitialState,
  action: HotKeyActionTypes
): HotKeysState {
  switch (action.type) {
    case SET_HOTKEY:
      const { actionName, hotKey } = action.payload;
      const hotKeys = {
        ...state.hotKeys,
        [actionName]: hotKey,
      };

      return {
        ...state,
        hotKeys,
      };

    default:
      return state;
  }
}

const settingsInitialState: SettingsState = {
  settings: defaultSettings,
}

export function settingsReducer(
  state = settingsInitialState,
  action: SettingsActionTypes
): SettingsState {
  switch (action.type) {
    case SET_OPTION:
      const { key, value } = action.payload;
      const settings = Settings.set(state.settings, key, value);

      return {
        ...state,
        settings,
      };

    default:
      return state;
  }
}
