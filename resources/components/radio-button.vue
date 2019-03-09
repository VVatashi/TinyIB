<template>
  <label :class="labelClass">
    <input type="radio"
      :class="inputClass"
      :value="value"
      :checked="value == selectedValue"
      @change="onInput" />
    <slot></slot>
  </label>
</template>

<script lang="ts" src="./radio-button.ts"></script>
