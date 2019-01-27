import Vue from 'vue';

export const FilePreview = Vue.extend({
  template: `
<div class="file-preview"
  v-on:click="onClick($event)"
  v-on:dragenter.stop.prevent
  v-on:dragleave.stop.prevent
  v-on:dragover.stop.prevent
  v-on:drop.stop.prevent="onDrop($event)">
  <span class="file-preview__info"
    v-if="type">{{ info }}</span>

  <img class="file-preview__content"
    v-bind:src="src"
    v-bind:title="info"
    v-if="type === 'image' && src" />
  <video class="file-preview__content" autoplay loop muted
    v-bind:src="src"
    v-bind:title="info"
    v-else-if="type === 'video' && src"></video>
  <span class="file-preview__label"
    v-else>Upload file</span>

  <slot></slot>
</div>`,
  props: ['file'],
  data() {
    return {
      src: null,
    };
  },
  computed: {
    name(): string {
      if (!this.file || !this.file.name) {
        return '';
      }

      return this.file.name;
    },
    size(): number {
      if (!this.file) {
        return 0;
      }

      return this.file.size;
    },
    sizeFormatted(): string {
      const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];

      let size = this.size;
      let i = 0;
      for (; i < units.length && size >= 1000; ++i) {
        size /= 1000;
      }

      return `${size.toFixed(2)} ${units[i]}`;
    },
    info(): string {
      return this.name
        ? `${this.name}, ${this.sizeFormatted}`
        : this.sizeFormatted;
    },
    type(): string {
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

      const name = this.name;
      if (name.endsWith('.webm') || name.endsWith('.mp4')) {
        return 'video';
      } else if (name.endsWith('.mp3')) {
        return 'audio';
      }

      return 'image';
    },
  },
  watch: {
    file(value: File) {
      if (!value) {
        this.src = null;
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', e => {
        this.src = (e.target as any).result;
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
