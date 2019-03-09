<template>
  <div>
    <h3 class="settings-form__option-title">Language</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.time.locale" :value="'default'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Browser default
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.time.locale" :value="'custom'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Custom
        <input type="text" class="input settings-form__text" placeholder="en"
          @click="settings.time.locale = 'custom'"
          v-model="settings.time.localeCustom" />
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Format</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.time.format" :value="'default'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Browser default
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.time.format" :value="'custom'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Custom
        <input type="text" class="input settings-form__text"
          placeholder="EEE, dd MMM yyyy HH:mm:ss"
          @click="settings.time.format = 'custom'"
          v-model="settings.time.formatCustom" />
      </x-radio-button>
    </div>

    <p>
      See the
      <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">
        luxon documentation
      </a>
      for the custom tokens reference.
    </p>

    <h3 class="settings-form__option-title">Time zone</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.time.zone" :value="'default'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Browser default
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.time.zone" :value="'fixed'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Fixed UTC offset
        <input type="number" class="input settings-form__text"
          min="-99" max="99"
          @click="settings.time.zone = 'fixed'"
          v-model="settings.time.zoneFixed" />
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Current format</h3>

    <p>{{ time }}</p>
  </div>
</template>

<script lang="ts" src="./time.ts"></script>
