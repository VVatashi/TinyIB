<template>
  <div>
    <h3 class="settings-form__option-title">Form Behaviour</h3>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.scrollBottom"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Scroll to the bottom after posting
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.saveSubject"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Save subject after posting
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.saveName"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Save name after posting
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.saveFormState"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Save form floating state on page reload
      </x-checkbox>
    </div>

    <h3 class="settings-form__option-title">Form Alignment</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.form.align" :value="'left'"
        label-class="settings-form__label" input-class="settings-form__radio">
        On the left
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.form.align" :value="'center'"
        label-class="settings-form__label" input-class="settings-form__radio">
        In the center
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Preview Alignment</h3>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.form.previewAlign" :value="'left'"
        label-class="settings-form__label" input-class="settings-form__radio">
        On the left
      </x-radio-button>
    </div>

    <div class="settings-form__row">
      <x-radio-button v-model="settings.form.previewAlign" :value="'right'"
        label-class="settings-form__label" input-class="settings-form__radio">
        On the right
      </x-radio-button>
    </div>

    <h3 class="settings-form__option-title">Markup</h3>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.showMarkup"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Show markup buttons
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.showMarkupMobile"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Show markup buttons (mobile)
      </x-checkbox>
    </div>

    <div class="settings-form__row">
      <x-checkbox v-model="settings.form.insertTagsInPairs"
        label-class="settings-form__label" input-class="settings-form__checkbox">
        Insert tags in pairs
      </x-checkbox>
    </div>

    <h3 class="settings-form__option-title">Replaces</h3>

    <ul class="settings-form__list">
      <li class="settings-form__list-item"
        v-for="(item, index) in settings.form.replaces"
        :key="index">
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
</template>

<script lang="ts" src="./form.ts"></script>
