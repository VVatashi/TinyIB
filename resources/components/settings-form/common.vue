<template>
  <div>
    <h3 class="settings-form__option-title">Thread Alignment</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.common.layout" :value="'left'"
        label-class="settings-form__label" input-class="settings-form__radio">
        On the left
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.common.layout" :value="'center'"
        label-class="settings-form__label" input-class="settings-form__radio">
        In the center
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Posts</h3>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.showPostHeaderReflinkIcon"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Show reply icon in the post header
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.movePostHeaderReflinkIconToDE"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Move DE hide button before reply icon
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.showPostReflinkIcon"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Show reply icon in the bottom right corner of post message
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.scrollToNewPosts"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Scroll to new posts
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.smoothScroll"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Smooth scrolling
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.showVideoOverlay"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Show video overlay
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.hidePopupOnOutsideClick"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Close image popup when clicking outside
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.nsfw"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Enable NSFW mode
      </x-checkbox>
    </div>
  </div>
</template>

<script lang="ts" src="./common.ts"></script>
