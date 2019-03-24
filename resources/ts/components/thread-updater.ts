import Vue from 'vue';

import ThreadUpdaterComponent from '../../components/thread-updater.vue';

import { eventBus, Events } from '..';
import { SettingsManager } from '../settings';
import { DOM } from '../utils';

export class ThreadUpdater {
  protected viewModel: Vue;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  protected onReady() {
    const settings = SettingsManager.load();
    if (!settings.common.threadAutoupdate) {
      return;
    }

    const threadUpdater = DOM.qid('thread-updater');
    if (!threadUpdater) {
      return;
    }

    this.viewModel = new Vue({
      el: '#thread-updater',
      render: h => h(ThreadUpdaterComponent),
    });
  }
}
