import { createStore, combineReducers } from 'redux';
import { hotKeysReducer, settingsReducer } from './reducers';
import { HotKeys } from '../hotkeys';
import { Settings } from '../settings';

const rootReducer = combineReducers({
  hotKeys: hotKeysReducer,
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState: AppState = {
  hotKeys: {
    hotKeys: HotKeys.load(),
  },
  settings: {
    settings: Settings.load(),
  },
};

export const store = createStore(rootReducer, initialState);
