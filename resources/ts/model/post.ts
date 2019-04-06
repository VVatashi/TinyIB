import { DateTime } from 'luxon';
import { SettingsManager } from '../settings';
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

    const settings = SettingsManager.load();
    const time = DateTime.fromMillis(this.createdAt);
    return this._formattedTime = Time.format(time, settings);
  }

  protected _isOwn: boolean = null;

  get isOwn() {
    if (this._isOwn !== null) {
      return this._isOwn;
    }

    const name = localStorage.getItem('user.name') || '';
    const tripcode = localStorage.getItem('user.tripcode') || '';
    const authorName = name + tripcode;
    const postAuthorName = this.name + this.tripcode;
    return this._isOwn = authorName.length && postAuthorName.indexOf(authorName) === 0;
  }
}
