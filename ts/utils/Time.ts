import { DateTime } from 'luxon';
import ISettingsDto from '../ISettingsDto';

export default class Time {
  static format(time: DateTime, settings: ISettingsDto) {
    const locale = settings.time_locale;
    const locale_value = settings.time_locale_custom_value;
    const zone = settings.time_zone;
    const zone_fixed_offset = settings.time_zone_fixed_offset;
    const format = settings.time_format;
    const format_value = settings.time_format_custom_value;

    if (locale === 'custom') {
      time = time.setLocale(locale_value);
    }

    if (zone === 'fixed') {
      const offset_str = 'UTC' + (zone_fixed_offset >= 0 ? '+' : '') + zone_fixed_offset.toString();
      time = time.setZone(offset_str);
    }

    if (format === 'custom') {
      return time.toFormat(format_value);
    }
    else {
      return time.toFormat('d.LL.yyyy HH:mm:ss');
    }
  }
}
