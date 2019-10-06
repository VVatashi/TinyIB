import { DateTime } from 'luxon';
import { LocalStorage } from '../local-storage';
import { API } from '../services';
import { Time } from '../utils';

export class Post {
  deleted: boolean;

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
    readonly ipHash: string,
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

  async delete() {
    const result = await API.deletePost(this.id);
    this.deleted = true;
    return result;
  }

  voteUp() {
    return API.voteForPost(this.id, 1);
  }

  voteDown() {
    return API.voteForPost(this.id, -1);
  }
}
