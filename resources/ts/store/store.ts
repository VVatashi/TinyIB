import { createStore, combineReducers } from 'redux';
import { hotKeysReducer, settingsReducer } from './reducers';
import { HotKeys } from '../hotkeys';
import { LocalStorage } from '../local-storage';
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
    customPostNotify: {
      name: LocalStorage.get('post.unreadPostsNotifyName', ''),
      file: LocalStorage.get('post.unreadPostsNotifyFile', ''),
    },
    customReplyNotify: {
      name: LocalStorage.get('post.unreadRepliesNotifyName', ''),
      file: LocalStorage.get('post.unreadRepliesNotifyFile', ''),
    },
  },
};

export const store = createStore(rootReducer, initialState);
