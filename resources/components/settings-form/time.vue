<template>
  <div>
    <h3 class="settings-form__option-title">Language</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="locale" :value="'default'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Browser default
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="locale" :value="'custom'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Custom
        <input type="text" class="input settings-form__text" placeholder="en"
          @click="locale = 'custom'"
          v-model="localeCustom" />
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Format</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="format" :value="'default'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Browser default
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="format" :value="'custom'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Custom
        <input type="text" class="input settings-form__text"
          placeholder="d.LL.yyyy HH:mm:ss"
          @click="format = 'custom'"
          v-model="formatCustom" />
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
      <x-radio-button v-model="zone" :value="'default'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Browser default
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="zone" :value="'fixed'"
        label-class="settings-form__label" input-class="settings-form__radio">
        Fixed UTC offset
        <input type="number" class="input settings-form__text"
          min="-99" max="99"
          @click="zone = 'fixed'"
          v-model="zoneFixed" />
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Current format</h3>

    <p>{{ time }}</p>
  </div>
</template>

<script lang="ts" src="./time.ts"></script>
