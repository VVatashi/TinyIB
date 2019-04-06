import Vue from 'vue';

import SettingsForm from '../../components/settings-form.vue';

import { eventBus, Events } from '..';
import { DOM } from '../utils';

export class Settings {
  protected viewModel: Vue;

  constructor() {
    eventBus.on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const settingsForm = DOM.qid('settings_form');
    if (!settingsForm) {
      return;
    }

    this.viewModel = new Vue({
      el: '#settings_form',
      render: h => h(SettingsForm),
    });
  }
}
