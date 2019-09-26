import { createStore, combineReducers } from 'redux';
import { hotKeysReducer } from './reducers';
import { HotKeys } from '../hotkeys';

const rootReducer = combineReducers({
  hotKeys: hotKeysReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState: AppState = {
  hotKeys: {
    hotKeys: HotKeys.load(),
  },
};

export const store = createStore(rootReducer, initialState);
