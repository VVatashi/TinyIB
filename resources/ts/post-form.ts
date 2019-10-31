export interface PostFormOpen {
  readonly position: 'open';
}

export interface PostFormClosed {
  readonly position: 'closed';
}

export interface PostFormAfterPost {
  readonly position: 'post';
  readonly postID: number;
}

export interface PostFormFloating {
  readonly position: 'float';
  readonly x: number;
  readonly y: number;
}

export type PostFormPosition =
  | PostFormOpen
  | PostFormClosed
  | PostFormAfterPost
  | PostFormFloating;
