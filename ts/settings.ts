export interface SettingsInterface {
  formPreviewAlign?: string;
  timeLocale?: string;
  timeLocaleCustomValue?: string;
  timeZone?: string;
  timeZoneFixedOffset?: number;
  timeFormat?: string;
  timeFormatCustomValue?: string;
}

export class Settings implements SettingsInterface {
  constructor(
    public readonly formPreviewAlign?: string,
    public readonly timeLocale?: string,
    public readonly timeLocaleCustomValue?: string,
    public readonly timeZone?: string,
    public readonly timeZoneFixedOffset?: number,
    public readonly timeFormat?: string,
    public readonly timeFormatCustomValue?: string,
  ) { }

  static create(settings: SettingsInterface) {
    return new Settings(
      settings.formPreviewAlign,
      settings.timeLocale,
      settings.timeLocaleCustomValue,
      settings.timeZone,
      settings.timeZoneFixedOffset,
      settings.timeFormat,
      settings.timeFormatCustomValue,
    );
  }
}
