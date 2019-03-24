import { DOM } from "../utils";

const pointerEvents = 'PointerEvent' in window;
const touchEvents = 'ontouchstart' in window;

function getEventCoords(e: PointerEvent | TouchEvent) {
  if (e instanceof MouseEvent) {
    return {
      x: e.clientX,
      y: e.clientY,
    };
  }

  if (pointerEvents && e instanceof PointerEvent) {
    return {
      x: e.clientX,
      y: e.clientY,
    };
  }

  if (touchEvents && e instanceof TouchEvent) {
    const touch = e.touches[0];
    return {
      x: touch.clientX,
      y: touch.clientY,
    };
  }

  return {
    x: 0,
    y: 0,
  };
}

interface DragStart {
  x: number;
  y: number;
  top: number;
  left: number;
}

export class Modal {
  protected dragStart?: DragStart = null;

  protected left: number = 0;
  protected top: number = 0;
  protected width: number = 0;
  protected height: number = 0;
  protected aspect: number = 1;

  protected onMove?: (left: number, top: number, width: number, heiht: number)
    => { left: number, top: number } = null;

  protected onClose?: () => any = null;

  protected $content?: HTMLElement = null;

  protected _isOpen: boolean = false;
  protected _isDragging: boolean = false;

  protected isDragged: boolean = false;

  get isOpen() {
    return this._isOpen;
  }

  get isDragging() {
    return this._isDragging;
  }

  constructor(
    readonly $modal: HTMLElement,
  ) {
    this.$content = DOM.qs('.modal__content', $modal) as HTMLElement;

    const onMove = (e: PointerEvent | TouchEvent) => {
      e.preventDefault();

      const { x, y } = getEventCoords(e);
      const dx = x - this.dragStart.x;
      const dy = y - this.dragStart.y;

      this.left = this.dragStart.left + dx;
      this.top = this.dragStart.top + dy;

      if (this.onMove) {
        const { left, top } = this.onMove(this.left, this.top, this.width, this.height);
        this.left = left;
        this.top = top;
      }

      this.$modal.style.left = `${this.left}px`;
      this.$modal.style.top = `${this.top}px`;

      const threshold = 5;
      if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
        this.isDragged = true;
      }

      return false;
    };

    const onUp = (e: PointerEvent | TouchEvent) => {
      e.preventDefault();

      if (pointerEvents) {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointercancel', onUp);
      } else {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);

        if (touchEvents) {
          window.removeEventListener('touchmove', onMove);
          window.removeEventListener('touchend', onUp);
          window.removeEventListener('touchcancel', onUp);
        }
      }

      if (!this.isDragged) {
        this.hide();
      }

      this.dragStart = null;

      setTimeout(() => {
        this._isDragging = false;
      }, 100);

      return false;
    };

    const onDown = (e: PointerEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        if (e.button !== 0) {
          return;
        }
      }

      e.preventDefault();

      const { x, y } = getEventCoords(e);
      this.dragStart = {
        x,
        y,
        left: this.left,
        top: this.top,
      };

      this._isDragging = true;
      this.isDragged = false;

      if (pointerEvents) {
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onUp);
      } else {
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);

        if (touchEvents) {
          window.addEventListener('touchmove', onMove);
          window.addEventListener('touchend', onUp);
          window.addEventListener('touchcancel', onUp);
        }
      }

      return false;
    };

    if (pointerEvents) {
      $modal.addEventListener('pointerdown', onDown);
    } else {
      $modal.addEventListener('mousedown', onDown);

      if (touchEvents) {
        $modal.addEventListener('touchstart', onDown);
      }
    }

    $modal.addEventListener('wheel', e => {
      e.preventDefault();

      const sensitivity = 0.20;
      const scale = 1 - sensitivity * Math.sign(e.deltaY);
      const newWidth = Math.max(128, Math.min(this.width * scale, 8192));
      const newHeight = newWidth / this.aspect;

      const rx = (e.clientX - this.left) / this.width;
      const ry = (e.clientY - this.top) / this.height;
      const dx = (newWidth - this.width) * rx;
      const dy = (newHeight - this.height) * ry;

      if (this.dragStart) {
        this.dragStart.left -= dx;
        this.dragStart.top -= dy;
      }

      this.left -= dx;
      this.top -= dy;
      this.width = newWidth;
      this.height = newHeight;

      if (this.onMove) {
        const { left, top } = this.onMove(this.left, this.top, this.width, this.height);
        this.left = left;
        this.top = top;
      }

      this.$modal.style.left = `${this.left}px`;
      this.$modal.style.top = `${this.top}px`;
      this.$content.style.width = `${this.width}px`;
      this.$content.style.height = `${this.height}px`;

      return false;
    });
  }

  show(
    left: number,
    top: number,
    width: number,
    height: number,
    onClose?: () => any,
    onMove?: (left: number, top: number, width: number, heiht: number)
      => { left: number, top: number },
  ) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.aspect = this.height > 0 ? this.width / this.height : 1;

    this.onClose = onClose;
    this.onMove = onMove;

    this.$modal.style.left = `${left}px`;
    this.$modal.style.top = `${top}px`;
    this.$content.style.width = `${width}px`;
    this.$content.style.height = `${height}px`;

    this.$modal.classList.remove('modal--hidden');

    this._isOpen = true;
  }

  hide() {
    if (!this.isOpen) {
      return;
    }

    this.$modal.classList.add('modal--hidden');

    if (this.onClose) {
      this.onClose();
    }

    this._isOpen = false;
  }
}
