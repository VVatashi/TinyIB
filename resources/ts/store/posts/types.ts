import { Media } from '../../media';
import { PostFormPosition } from '../../post-form';

export interface PostsState {
  readonly postFormPosition: PostFormPosition;
  readonly media: Media;
}

export const OPEN_POST_FORM = 'OPEN_POST_FORM';
export const CLOSE_POST_FORM = 'CLOSE_POST_FORM';
export const MAKE_POST_FORM_FLOAT = 'MAKE_POST_FORM_FLOAT';
export const PUT_POST_FORM_AFTER_POST = 'PUT_POST_FORM_AFTER_POST';

export const OPEN_MEDIA_POPUP = 'OPEN_MEDIA_POPUP';
export const CLOSE_MEDIA_POPUP = 'CLOSE_MEDIA_POPUP';

interface OpenPostFormAction {
  readonly type: typeof OPEN_POST_FORM;
  readonly payload: {};
}

interface ClosePostFormAction {
  readonly type: typeof CLOSE_POST_FORM;
  readonly payload: {};
}

interface MakePostFormFloatAction {
  readonly type: typeof MAKE_POST_FORM_FLOAT;
  readonly payload: {
    readonly x: number;
    readonly y: number;
  };
}

interface PutPostFormAfterPostAction {
  readonly type: typeof PUT_POST_FORM_AFTER_POST;
  readonly payload: {
    readonly postID: number;
  };
}

interface OpenMediaPopupAction {
  readonly type: typeof OPEN_MEDIA_POPUP;
  readonly payload: {
    readonly media: Media;
  };
}

interface CloseMediaPopupAction {
  readonly type: typeof CLOSE_MEDIA_POPUP;
  readonly payload: {};
}

export type PostsActionTypes =
  | OpenPostFormAction
  | ClosePostFormAction
  | MakePostFormFloatAction
  | PutPostFormAfterPostAction
  | OpenMediaPopupAction
  | CloseMediaPopupAction;
