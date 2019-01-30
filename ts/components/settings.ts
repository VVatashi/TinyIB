import { DateTime } from 'luxon';
import Vue from 'vue';
import {
  eventBus, Events,
  Settings as SettingsData, SettingsManager,
} from '..';
import { Replace } from '../settings';
import { DOM, Time } from '../utils';

export class Settings {
  protected readonly settings: SettingsData;
  protected viewModel: Vue;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const settingsForm = DOM.qid('settings_form');
    if (!settingsForm) {
      return;
    }

    const Checkbox = Vue.extend({
      template: `
<div class="settings-form__row">
  <label class="settings-form__label">
    <input type="checkbox" class="settings-form__checkbox"
      :value="value"
      :checked="checked"
      @change="onInput" />
    <slot></slot>
  </label>
</div>`,
      model: {
        prop: 'checked',
        event: 'change',
      },
      props: {
        value: {
          type: Boolean,
          default: true,
        },
        checked: {
          type: Boolean,
          default: false,
        },
      },
      methods: {
        onInput(e: Event) {
          this.$emit('change', !this.checked);
        },
      },
    });

    const RadioButton = Vue.extend({
      template: `
<div class="settings-form__row">
  <label class="settings-form__label">
    <input type="radio" class="settings-form__radio"
      :value="value"
      :checked="value == selectedValue"
      @change="onInput" />
    <slot></slot>
  </label>
</div>`,
      model: {
        prop: 'selectedValue',
        event: 'change',
      },
      props: {
        value: String,
        selectedValue: String,
      },
      methods: {
        onInput(e: Event) {
          this.$emit('change', this.value);
        },
      },
    });

    this.viewModel = new Vue({
      el: '#settings_form',
      template: `
<div class="content__settings-form settings-form" id="settings_form">
  <ul class="settings-form__tabs">
    <li class="settings-form__tab"
      :class="{ 'settings-form__tab--active': tab === 'common' }"
      @click="tab = 'common'">Common</li>

    <li class="settings-form__tab"
      :class="{ 'settings-form__tab--active': tab === 'form' }"
      @click="tab = 'form'">Form</li>

    <li class="settings-form__tab"
      :class="{ 'settings-form__tab--active': tab === 'time' }"
      @click="tab = 'time'">Time</li>
  </ul>

  <div class="settings-form__tab-content"
    v-show="tab === 'common'">
    <h3 class="settings-form__option-title">Thread Alignment</h3>

    <x-radio-button v-model="settings.common.layout" :value="'left'">
      On the left
    </x-radio-button>

    <x-radio-button v-model="settings.common.layout" :value="'center'">
      In the center
    </x-radio-button>

    <h3 class="settings-form__option-title">Posts</h3>

    <x-checkbox v-model="settings.common.showPostHeaderReflinkIcon">
      Show reply icon in the post header
    </x-checkbox>

    <x-checkbox v-model="settings.common.movePostHeaderReflinkIconToDE">
      Move DE hide button before reply icon
    </x-checkbox>

    <x-checkbox v-model="settings.common.showPostReflinkIcon">
      Show reply icon in the bottom right corner of post message
    </x-checkbox>

    <x-checkbox v-model="settings.common.scrollToNewPosts">
      Scroll to new posts
    </x-checkbox>

    <x-checkbox v-model="settings.common.smoothScroll">
      Smooth scrolling
    </x-checkbox>

    <x-checkbox v-model="settings.common.showVideoOverlay">
      Show video overlay
    </x-checkbox>
  </div>

  <div class="settings-form__tab-content"
    v-show="tab === 'form'">
    <h3 class="settings-form__option-title">Form Behaviour</h3>

    <x-checkbox v-model="settings.form.scrollBottom">
      Scroll to the bottom after posting
    </x-checkbox>

    <x-checkbox v-model="settings.form.saveSubject">
      Save subject after posting
    </x-checkbox>

    <x-checkbox v-model="settings.form.saveName">
      Save name after posting
    </x-checkbox>

    <x-checkbox v-model="settings.form.saveFormState">
      Save form floating state on page reload
    </x-checkbox>

    <h3 class="settings-form__option-title">Form Alignment</h3>

    <x-radio-button v-model="settings.form.align" :value="'left'">
      On the left
    </x-radio-button>

    <x-radio-button v-model="settings.form.align" :value="'center'">
      In the center
    </x-radio-button>

    <h3 class="settings-form__option-title">Preview Alignment</h3>

    <x-radio-button v-model="settings.form.previewAlign" :value="'left'">
      On the left
    </x-radio-button>

    <x-radio-button v-model="settings.form.previewAlign" :value="'right'">
      On the right
    </x-radio-button>

    <h3 class="settings-form__option-title">Markup</h3>

    <x-checkbox v-model="settings.form.showMarkup">
      Show markup buttons
    </x-checkbox>

    <x-checkbox v-model="settings.form.showMarkupMobile">
      Show markup buttons (mobile)
    </x-checkbox>

    <x-checkbox v-model="settings.form.insertTagsInPairs">
      Insert tags in pairs
    </x-checkbox>

    <h3 class="settings-form__option-title">Replaces</h3>

    <ul class="settings-form__list">
      <li class="settings-form__list-item"
        v-for="(item, index) in settings.form.replaces">
        <input type="text" class="input settings-form__text"
          v-model="item.pattern" placeholder="Pattern" />

        <input type="text" class="input settings-form__text"
          v-model="item.replace" placeholder="Replace" />

        <button class="button"
          @click="removeReplaceAt(index)">Remove</button>
      </li>

      <li class="settings-form__list-item">
        <input type="text" class="input settings-form__text"
          v-model="newReplace.pattern" placeholder="Pattern" />

        <input type="text" class="input settings-form__text"
          v-model="newReplace.replace" placeholder="Replace" />

        <button class="button"
          @click="addReplace(newReplace)">Add</button>
      </li>
    </ul>
  </div>

  <div class="settings-form__tab-content"
    v-show="tab === 'time'">
    <h3 class="settings-form__option-title">Language</h3>

    <x-radio-button v-model="settings.time.locale" :value="'default'">
      Browser default
    </x-radio-button>

    <x-radio-button v-model="settings.time.locale" :value="'custom'">
      Custom
      <input type="text" class="input settings-form__text" placeholder="en"
        @click="settings.time.locale = 'custom'"
        v-model="settings.time.localeCustom" />
    </x-radio-button>

    <h3 class="settings-form__option-title">Format</h3>

    <x-radio-button v-model="settings.time.format" :value="'default'">
      Browser default
    </x-radio-button>

    <x-radio-button v-model="settings.time.format" :value="'custom'">
      Custom
      <input type="text" class="input settings-form__text"
        placeholder="EEE, dd MMM yyyy HH:mm:ss"
        @click="settings.time.format = 'custom'"
        v-model="settings.time.formatCustom" />
    </x-radio-button>

    <p>
      See the
      <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">
        luxon documentation
      </a>
      for the custom tokens reference.
    </p>

    <h3 class="settings-form__option-title">Time zone</h3>

    <x-radio-button v-model="settings.time.zone" :value="'default'">
      Browser default
    </x-radio-button>

    <x-radio-button v-model="settings.time.zone" :value="'fixed'">
      Fixed UTC offset
      <input type="number" class="input settings-form__text"
        min="-99" max="99"
        @click="settings.time.zone = 'fixed'"
        v-model="settings.time.zoneFixed" />
    </x-radio-button>

    <h3 class="settings-form__option-title">Current format</h3>

    <p>{{ time }}</p>
  </div>

  <div class="settings-form__footer">
    <div class="settings-form__buttons">
      <p class="settings-form__status" >{{ status }}</p>

      <button type="button" class="button settings-form__save"
        @click.prevent="saveSettings()">Save</button>
    </div>
  </div>
</div>`,
      data() {
        return {
          settings: null,
          tab: 'common',
          newReplace: {
            pattern: '',
            replace: '',
          },
          time: '',
          status: '',
        };
      },
      created() {
        // Load settings from a cookie
        this.settings = SettingsManager.load();
        this._timer = setInterval(this.updateTime.bind(this), 1000);
      },
      destroyed() {
        if (this._timer) {
          clearInterval(this._timer);
        }
      },
      methods: {
        removeReplaceAt(index: number) {
          this.settings.form.replaces.splice(index, 1);
        },
        addReplace(item: Replace) {
          try {
            new RegExp(item.pattern, 'gm');
          } catch (e) {
            this.status = `Invalid regular expression: ${e.message}`;
            return;
          }

          this.settings.form.replaces.push({ ...item });
          this.newReplace = { pattern: '', replace: '' };
        },
        updateTime() {
          try {
            const time = DateTime.fromJSDate(new Date());
            this.time = Time.format(time, this.settings);
          }
          catch {
            this.time = 'Invalid format';
          }
        },
        saveSettings() {
          SettingsManager.save(this.settings);

          // Indicate that settings are saved.
          this.status = '';
          setTimeout(() => {
            this.status = 'Settings saved.';
          }, 1000 / 3);
        },
      },
      components: {
        'x-checkbox': Checkbox,
        'x-radio-button': RadioButton,
      },
    });
  }
}
