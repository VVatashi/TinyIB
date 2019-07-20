import { DateTime } from 'luxon';
import { LocalStorage, API } from '../services';
import { Time } from '../utils';

export class Post {
  constructor(
    readonly id: number,
    readonly createdAt: number,
    readonly subject: string,
    readonly name: string,
    readonly tripcode: string,
    readonly thumbnail: string,
    readonly file: string,
    readonly fileWidth: number,
    readonly fileHeight: number,
    readonly referencedIds: number[],
  ) { }

  protected _formattedTime: string = null;

  get formattedTime() {
    if (this._formattedTime) {
      return this._formattedTime;
    }

    const time = DateTime.fromMillis(this.createdAt);
    return this._formattedTime = Time.format(time);
  }

  protected _isOwn: boolean = null;

  get isOwn() {
    if (this._isOwn !== null) {
      return this._isOwn;
    }

    const name = LocalStorage.get('user.name', '');
    const tripcode = LocalStorage.get('user.tripcode', '');
    const authorName = name + tripcode;
    const postAuthorName = this.name + this.tripcode;
    return this._isOwn = authorName.length && postAuthorName.indexOf(authorName) === 0;
  }

  delete() {
    return API.deletePost(this.id);
  }

  voteUp() {
    return API.voteForPost(this.id, 1);
  }

  voteDown() {
    return API.voteForPost(this.id, -1);
  }
}
