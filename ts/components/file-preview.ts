import Vue from 'vue';

export const FilePreview = Vue.extend({
  template: `
<div class="file-preview"
  v-on:click="onClick($event)"
  v-on:dragenter.stop.prevent
  v-on:dragleave.stop.prevent
  v-on:dragover.stop.prevent
  v-on:drop.stop.prevent="onDrop($event)">
  <img class="file-preview__content"
    v-bind:src="previewSrc"
    v-if="previewType === 'image' && previewSrc" />
  <video class="file-preview__content" autoplay loop muted
    v-bind:src="previewSrc"
    v-else-if="previewType === 'video' && previewSrc"></video>
  <span class="file-preview__label"
    v-else>Upload file</span>

  <slot></slot>
</div>`,
  props: ['file'],
  data() {
    return {
      previewSrc: null,
    };
  },
  computed: {
    previewType(): string {
      if (!this.file) {
        return null;
      }

      const type = this.file.type;
      if (type) {
        if (type.startsWith('video/')) {
          return 'video';
        } else if (type.startsWith('audio/')) {
          return 'audio';
        } else {
          return 'image';
        }
      }

      const name = this.file.name;
      if (name) {
        if (name.endsWith('.webm') || name.endsWith('.mp4')) {
          return 'video';
        } else if (name.endsWith('.mp3')) {
          return 'audio';
        } else {
          return 'image';
        }
      }

      return 'image';
    },
  },
  watch: {
    file(value: File) {
      if (!value) {
        this.previewSrc = null;
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', e => {
        this.previewSrc = (e.target as any).result;
      });
      reader.readAsDataURL(value);
    },
  },
  methods: {
    onClick(e: MouseEvent) {
      this.$emit('click', e);
    },
    onDrop(e: DragEvent) {
      this.$emit('drop', e);
    },
  },
});
