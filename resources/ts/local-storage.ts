export class LocalStorage {
  public static has(key: string): boolean {
    return localStorage[key] !== undefined && localStorage[key] !== null;
  }

  public static get<T>(key: string, defaultValue: T = null): T {
    try {
      return LocalStorage.has(key)
        ? JSON.parse(localStorage[key]).value
        : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  public static set<T>(key: string, value: T): T {
    localStorage[key] = JSON.stringify({ value });
    return value;
  }

  public static remove<T>(key: string, defaultValue: T = null): T {
    const value = localStorage[key];
    localStorage.removeItem(key);
    return value;
  }
}
