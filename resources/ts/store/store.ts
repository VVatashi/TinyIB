import { createStore, combineReducers } from 'redux';

import { postsReducer } from './posts/reducers';
import { settingsReducer } from './settings/reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
export default store;
