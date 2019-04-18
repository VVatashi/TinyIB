export class Settings {
  static has(key: string): boolean {
    return localStorage[key] !== undefined && localStorage[key] !== null;
  }

  static get<T>(key: string, defaultValue: T = null): T {
    return Settings.has(key)
      ? JSON.parse(localStorage[key]).value
      : defaultValue;
  }

  static set<T>(key: string, value: T): T {
    localStorage[key] = JSON.stringify({ value });
    return value;
  }
}
