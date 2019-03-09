import { DateTime } from 'luxon';
import { Settings } from '..';

export class Time {
  static format(time: DateTime, settings: Settings) {
    if (settings.time.locale === 'custom') {
      time = time.setLocale(settings.time.localeCustom);
    }

    if (settings.time.zone === 'fixed') {
      const offset = settings.time.zoneFixed;
      const offsetStr = 'UTC' + (offset >= 0 ? '+' : '') + offset.toString();
      time = time.setZone(offsetStr);
    }

    if (settings.time.format === 'custom') {
      return time.toFormat(settings.time.formatCustom);
    }
    else {
      return time.toFormat('d.LL.yyyy HH:mm:ss');
    }
  }
}
