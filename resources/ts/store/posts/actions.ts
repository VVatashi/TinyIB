import {
  PostsActionTypes,
  OPEN_POST_FORM,
  CLOSE_POST_FORM,
  MAKE_POST_FORM_FLOAT,
  PUT_POST_FORM_AFTER_POST,
  OPEN_MEDIA_POPUP,
  CLOSE_MEDIA_POPUP,
} from './types';

import { Media } from '../../media';

export function openPostForm(): PostsActionTypes {
  return {
    type: OPEN_POST_FORM,
    payload: {},
  };
}

export function closePostForm(): PostsActionTypes {
  return {
    type: CLOSE_POST_FORM,
    payload: {},
  };
}

export function makePostFormFloat(x: number, y: number): PostsActionTypes {
  return {
    type: MAKE_POST_FORM_FLOAT,
    payload: { x, y },
  };
}

export function putPostFormAfterPost(postID: number): PostsActionTypes {
  return {
    type: PUT_POST_FORM_AFTER_POST,
    payload: { postID },
  };
}

export function openMediaPopup(media: Media): PostsActionTypes {
  return {
    type: OPEN_MEDIA_POPUP,
    payload: { media },
  };
}

export function closeMediaPopup(): PostsActionTypes {
  return {
    type: CLOSE_MEDIA_POPUP,
    payload: {},
  };
}
