import {
  PostsState,
  PostsActionTypes,
  OPEN_POST_FORM,
  CLOSE_POST_FORM,
  MAKE_POST_FORM_FLOAT,
  PUT_POST_FORM_AFTER_POST,
  OPEN_MEDIA_POPUP,
  CLOSE_MEDIA_POPUP,
} from './types';

export const postsInitialState: PostsState = {
  postFormPosition: { position: 'closed' },
  media: null,
}

export function postsReducer(
  state = postsInitialState,
  action: PostsActionTypes
): PostsState {
  switch (action.type) {
    case OPEN_POST_FORM:
      return {
        ...state,
        postFormPosition: { position: 'open' },
      };

    case CLOSE_POST_FORM:
      return {
        ...state,
        postFormPosition: { position: 'closed' },
      };

    case MAKE_POST_FORM_FLOAT:
      return {
        ...state,
        postFormPosition: {
          position: 'float',
          x: action.payload.x,
          y: action.payload.y,
        },
      };

    case PUT_POST_FORM_AFTER_POST:
      return {
        ...state,
        postFormPosition: {
          position: 'post',
          postID: action.payload.postID,
        },
      };

    case OPEN_MEDIA_POPUP:
      return {
        ...state,
        media: action.payload.media,
      };

    case CLOSE_MEDIA_POPUP:
      return {
        ...state,
        media: null,
      };

    default:
      return state;
  }
}
