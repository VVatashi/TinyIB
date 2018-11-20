import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs } from '../../utils/DOM';

export default class PostImagePopup extends PostModule {
  protected scale = 1.0;

  protected offsetX = 0;
  protected offsetY = 0;

  protected dragStartOffsetX = 0;
  protected dragStartOffsetY = 0;

  protected dragStartMouseX = 0;
  protected dragStartMouseY = 0;

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected closeModal(modal: HTMLElement) {
    this.scale = 1.0;
    this.offsetX = 0;
    this.offsetY = 0;

    // Fade-out the modal.
    modal.classList.add('fade');
    setTimeout(() => {
      modal.remove();
    }, 333);
  }

  protected transformModal(modal: HTMLElement) {
    const image = qs('.modal__image', modal) as HTMLElement;
    image.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
  }

  protected openModal(thumbnailLink: HTMLAnchorElement) {
    let file: HTMLElement;

    const type = thumbnailLink.getAttribute('data-file-type');
    if (type === 'video') {
      const element = document.createElement('video') as HTMLVideoElement;
      const width = thumbnailLink.getAttribute('data-file-width');
      const height = thumbnailLink.getAttribute('data-file-height');
      element.classList.add('modal__video');
      element.setAttribute('controls', 'controls');
      element.setAttribute('preload', 'metadata');
      element.setAttribute('width', width);
      element.setAttribute('height', height);
      element.src = thumbnailLink.href;
      file = element;
    } else if (type === 'audio') {
      const element = document.createElement('audio') as HTMLAudioElement;
      element.classList.add('modal__audio');
      element.setAttribute('controls', 'controls');
      element.setAttribute('preload', 'metadata');
      element.src = thumbnailLink.href;
      file = element;
    } else {
      const element = document.createElement('img') as HTMLImageElement;
      element.classList.add('modal__image');
      element.src = thumbnailLink.href;
      file = element;
    }

    // Prevent default drag behaviour on the image.
    file.addEventListener('dragstart', e => {
      e.preventDefault();
      return false;
    });

    // Prevent image click event bubbling to the modal.
    file.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    // Move image on mouse drag.
    file.addEventListener('mousedown', e => {
      e.preventDefault();

      // Save initial image position.
      this.dragStartOffsetX = this.offsetX;
      this.dragStartOffsetY = this.offsetY;

      // Save initial mouse position.
      this.dragStartMouseX = e.pageX;
      this.dragStartMouseY = e.pageY;

      const onMouseMove = (e: MouseEvent) => {
        e.preventDefault();

        // Get mouse offset delta.
        const deltaX = e.pageX - this.dragStartMouseX;
        const deltaY = e.pageY - this.dragStartMouseY;

        // Move image.
        this.offsetX = this.dragStartOffsetX + deltaX;
        this.offsetY = this.dragStartOffsetY + deltaY;
        this.transformModal(modal);

        return false;
      };

      const onMouseUp = (e: MouseEvent) => {
        e.preventDefault();

        // Remove drag event handlers.
        document.removeEventListener('mousemove', onMouseMove);
        file.removeEventListener('mouseup', onMouseUp);

        // If image is not dragged, close the modal.
        const eps = 10e-3;
        if (Math.abs(this.offsetX - this.dragStartOffsetX) < eps
          || Math.abs(this.offsetY - this.dragStartOffsetY) < eps) {
          this.closeModal(modal);
        }

        return false;
      };

      // Setup drag event handlers.
      document.addEventListener('mousemove', onMouseMove);
      file.addEventListener('mouseup', onMouseUp);

      return false;
    });

    const modal = document.createElement('div');
    modal.classList.add('layout__modal', 'modal');
    modal.appendChild(file);

    // Close modal on mouse click.
    modal.addEventListener('click', e => {
      e.preventDefault();
      this.closeModal(modal);
      return false;
    });

    // Scale modal on mouse wheel.
    modal.addEventListener('wheel', e => {
      e.preventDefault();
      const delta = 0.1;
      this.scale = (1.0 - Math.sign(e.deltaY) * delta) * this.scale;
      this.transformModal(modal);
      return false;
    });

    const thumbnail = thumbnailLink.parentElement;
    thumbnail.appendChild(modal);

    // Fade-in the modal.
    modal.classList.add('fadable', 'fade');
    setTimeout(() => {
      modal.classList.remove('fade');
    }, 100);
  }

  protected processPost(post: Element) {
    const thumbnailLink = qs('.post__thumbnail-link', post) as HTMLAnchorElement;
    if (thumbnailLink) {
      thumbnailLink.addEventListener('click', e => {
        e.preventDefault();
        this.openModal(thumbnailLink);
        return false;
      });
    }
  }
}
