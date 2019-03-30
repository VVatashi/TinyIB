<template>
  <div id="thread-updater"
    class="thread-updater content__thread-updater">
    <button type="button"
      class="button thread-updater__update"
      :disabled="loading"
      @click="onGetNewPostsClick">
      Get new posts
    </button>

    <x-checkbox v-model="autoupdate"
      label-class="thread-updater__auto-label"
      input-class="thread-updater__auto-checkbox">
      Autoupdate
      <span v-if="autoupdate">in {{ counter }}</span>
    </x-checkbox>

    <span class="thread-updater__loader" v-if="loading"></span>

    <span class="thread-updater__status" v-if="status">{{ status }}</span>
  </div>
</template>

<script lang="ts" src="./thread-updater.ts"></script>
