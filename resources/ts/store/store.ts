import { createStore, combineReducers } from 'redux';
import { settingsReducer } from './reducers';
import { HotKeys } from '../hotkeys';
import { LocalStorage } from '../local-storage';
import { Settings } from '../settings';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState: AppState = {
  settings: {
    showPopup: false,
    settings: Settings.load(),
    hotKeys: HotKeys.load(),
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
