import BaseModule from '../BaseModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';

export default class PostImagePopup extends BaseModule {
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

    modal.remove();
  }

  protected transformModal(modal: HTMLElement) {
    const image = qs('.modal__image', modal) as HTMLElement;
    image.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
  }

  protected openModal(thumbnailLink: HTMLAnchorElement) {
    const image = document.createElement('img');
    image.classList.add('modal__image');
    image.src = thumbnailLink.href;

    // Prevent default drag behaviour on the image.
    image.addEventListener('dragstart', e => {
      e.preventDefault();
      return false;
    });

    // Prevent image click event bubbling to the modal.
    image.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    // Move image on mouse drag.
    image.addEventListener('mousedown', e => {
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
        image.removeEventListener('mouseup', onMouseUp);

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
      image.addEventListener('mouseup', onMouseUp);

      return false;
    });

    const modal = document.createElement('div');
    modal.classList.add('layout__modal', 'modal');
    modal.appendChild(image);

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

  onReady() {
    const posts = qsa('.post');
    const count = posts.length;
    for (let i = 0; i < count; ++i) {
      this.processPost(posts[i]);
    }
  }

  onPostInsert(post: Element) {
    this.processPost(post);
  }
}
