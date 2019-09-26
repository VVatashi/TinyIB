import { HotKeysState, HotKeyActionTypes, SET_HOTKEY } from './types';

const initialState: HotKeysState = {
  hotKeys: {},
}

export function hotKeysReducer(
  state = initialState,
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
