<template>
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

    <x-common class="settings-form__tab-content"
      v-show="tab === 'common'">
    </x-common>

    <x-form class="settings-form__tab-content"
      v-show="tab === 'form'">
    </x-form>

    <x-time class="settings-form__tab-content"
      v-show="tab === 'time'">
    </x-time>

    <div class="settings-form__footer">
      <div class="settings-form__buttons">
        <p class="settings-form__status" >{{ status }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./settings-form.ts"></script>
