import { DateTime } from 'luxon';
import { Settings } from '../services';

export class Time {
  static format(time: DateTime) {
    if (Settings.get<string>('time.locale') === 'custom') {
      time = time.setLocale(Settings.get('time.locale-custom'));
    }

    if (Settings.get<string>('time.zone') === 'fixed') {
      const offset = Settings.get('time.zone-fixed');
      const offsetStr = 'UTC' + (offset >= 0 ? '+' : '') + offset.toString();
      time = time.setZone(offsetStr);
    }

    if (Settings.get<string>('time.format') === 'custom') {
      return time.toFormat(Settings.get('time.format-custom'));
    } else {
      return time.toFormat('d.LL.yyyy HH:mm:ss');
    }
  }
}
