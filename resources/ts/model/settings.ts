import { EventEmitter } from '../utils';

export class Settings extends EventEmitter {
  static readonly TAB_CHANGED = 'current-tab-changed';

  protected _currentTab: string = '';

  get currentTab(): string {
    return this._currentTab;
  }

  set currentTab(value: string) {
    this._currentTab = value;
    this.emit(Settings.TAB_CHANGED, value);
  }

  constructor() {
    super();
  }
}
