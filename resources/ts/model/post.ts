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
  ) { }

  get formattedTime() {
    const settings = SettingsManager.load();
    const time = DateTime.fromMillis(this.createdAt);
    return Time.format(time, settings);
  }
}
