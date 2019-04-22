import { BasePage } from './base';

import { SettingsView } from '../views';
import { DOM } from '../utils';

export class SettingsPage extends BasePage {
  readonly view: SettingsView;

  constructor() {
    super();

    const $form = DOM.qid('settings-form');
    this.view = new SettingsView($form);
  }
}
