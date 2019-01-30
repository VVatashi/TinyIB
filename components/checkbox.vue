<template>
  <label :class="labelClass">
    <input type="checkbox"
      :class="inputClass"
      :value="value"
      :checked="checked"
      @change="onInput" />
    <slot></slot>
  </label>
</template>

<script lang="ts" src="./checkbox.ts"></script>
