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

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.enableThreadAutoupdate"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Enable thread autoupdate
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.addNamesToLinks"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Add names to the links
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.addYouToLinks"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Add '(you)' to the links
      </x-checkbox>
    </div>

    <h3 class="settings-form__option-title">Hide posts</h3>

    <ul class="settings-form__list">
      <li class="settings-form__list-item"
        v-for="(item, index) in settings.common.hiddenPosts"
        :key="index">
        <input type="text" class="input settings-form__text"
          v-model="item.name" placeholder="Name" />

        <input type="text" class="input settings-form__text"
          v-model="item.tripcode" placeholder="!Tripcode" />

        <button class="button"
          @click="removeAuthorAt(index)">Remove</button>
      </li>

      <li class="settings-form__list-item">
        <input type="text" class="input settings-form__text"
          v-model="newAuthor.name" placeholder="Name" />

        <input type="text" class="input settings-form__text"
          v-model="newAuthor.tripcode" placeholder="!Tripcode" />

        <button class="button"
          @click="addAuthor(newAuthor)">Add</button>
      </li>
    </ul>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.removeHiddenPosts"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Remove hidden posts
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.common.showPostPopups"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Show post in a popup when hovering over link
      </x-checkbox>
    </div>
  </div>
</template>

<script lang="ts" src="./common.ts"></script>
