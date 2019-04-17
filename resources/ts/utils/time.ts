import { DateTime } from 'luxon';
import { Settings } from '../services';

export class Time {
  static format(time: DateTime) {
    if (Settings.get<string>('time.locale', 'default') === 'custom') {
      time = time.setLocale(Settings.get('time.locale-custom', 'en'));
    }

    if (Settings.get<string>('time.zone', 'default') === 'fixed') {
      const offset = Settings.get('time.zone-fixed', 0);
      const offsetStr = 'UTC' + (offset >= 0 ? '+' : '') + offset.toString();
      time = time.setZone(offsetStr);
    }

    if (Settings.get<string>('time.format', 'default') === 'custom') {
      return time.toFormat(Settings.get('time.format-custom', 'd.LL.yyyy HH:mm:ss'));
    } else {
      return time.toFormat('d.LL.yyyy HH:mm:ss');
    }
  }
}
