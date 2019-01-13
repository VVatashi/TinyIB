import { DateTime } from 'luxon';
import { SettingsInterface } from '..';

export class Time {
  static format(time: DateTime, settings: SettingsInterface) {
    const locale = settings.timeLocale;
    const localeValue = settings.timeLocaleCustomValue;
    const zone = settings.timeZone;
    const zoneFixedOffset = settings.timeZoneFixedOffset;
    const format = settings.timeFormat;
    const formatValue = settings.timeFormatCustomValue;

    if (locale === 'custom') {
      time = time.setLocale(localeValue);
    }

    if (zone === 'fixed') {
      const offsetStr = 'UTC' + (zoneFixedOffset >= 0 ? '+' : '') + zoneFixedOffset.toString();
      time = time.setZone(offsetStr);
    }

    if (format === 'custom') {
      return time.toFormat(formatValue);
    }
    else {
      return time.toFormat('d.LL.yyyy HH:mm:ss');
    }
  }
}
