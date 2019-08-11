import { DOM } from '../utils';

const pointerEvents = 'PointerEvent' in window;
const touchEvents = 'ontouchstart' in window;

const startEvents: string[] = [];
const moveEvents: string[] = [];
const endEvents: string[] = [];

if (pointerEvents) {
  startEvents.push('pointerdown');
  moveEvents.push('pointermove');
  endEvents.push('pointerup', 'pointercancel');
} else {
  startEvents.push('mousedown');
  moveEvents.push('mousemove');
  endEvents.push('mouseup');

  if (touchEvents) {
    startEvents.push('touchstart');
    moveEvents.push('touchmove');
    endEvents.push('touchend', 'touchcancel');
  }
}

function getEventCoords(e: PointerEvent | TouchEvent) {
  if (e instanceof MouseEvent
    || pointerEvents && e instanceof PointerEvent) {
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
  timestamp: number;
}

export class Modal {
  protected dragStart?: DragStart = null;

  protected left: number = 0;
  protected top: number = 0;
  protected width: number = 0;
  protected height: number = 0;
  protected scale: number = 1;
  protected aspect: number = 1;

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
    readonly fitHeightToContent: boolean = true,
  ) {
    this.$content = DOM.qs('.modal__content', $modal) as HTMLElement;

    const onMove = (e: PointerEvent | TouchEvent) => {
      e.preventDefault();

      const { x, y } = getEventCoords(e);

      if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) {
        return;
      }

      const dx = x - this.dragStart.x;
      const dy = y - this.dragStart.y;

      this.left = this.dragStart.left + dx;
      this.top = this.dragStart.top + dy;

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

      moveEvents.forEach(event => window.removeEventListener(event, onMove));
      endEvents.forEach(event => window.removeEventListener(event, onUp));

      const elapsedTime = e.timeStamp - this.dragStart.timestamp;
      if (!this.isDragged && elapsedTime < 500) {
        this.hide();
      }

      this.dragStart = null;
      this.$modal.classList.remove('modal--dragging');

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

      if ((e.target as HTMLElement).closest('.video-player__controls')) {
        return;
      }

      e.preventDefault();

      const { x, y } = getEventCoords(e);
      this.dragStart = {
        x,
        y,
        left: this.left,
        top: this.top,
        timestamp: e.timeStamp,
      };

      this._isDragging = true;
      this.isDragged = false;
      this.$modal.classList.add('modal--dragging');

      moveEvents.forEach(event => window.addEventListener(event, onMove));
      endEvents.forEach(event => window.addEventListener(event, onUp));

      return false;
    };

    startEvents.forEach(event => $modal.addEventListener(event, onDown));

    $modal.addEventListener('wheel', e => {
      e.preventDefault();

      const pow = -1.125;
      const prevWidth = this.width * Math.pow(this.scale, pow);
      const prevHeight = prevWidth / this.aspect;

      const sensitivity = 0.1;
      const newScale = this.scale + sensitivity * Math.sign(e.deltaY);
      const newWidth = this.width * Math.pow(newScale, pow);
      if (newWidth > 128 && newWidth < 32768) {
        this.scale = newScale;
      }

      const width = this.width * Math.pow(this.scale, pow);
      const height = width / this.aspect;

      const rx = (e.clientX - this.left) / prevWidth;
      const ry = (e.clientY - this.top) / prevHeight;
      const dx = (width - prevWidth) * rx;
      const dy = (height - prevHeight) * ry;

      if (this.dragStart) {
        this.dragStart.left -= dx;
        this.dragStart.top -= dy;
      }

      this.left -= dx;
      this.top -= dy;

      this.$modal.style.left = `${this.left}px`;
      this.$modal.style.top = `${this.top}px`;
      this.$content.style.width = `${width}px`;

      if (!this.fitHeightToContent) {
        this.$content.style.height = `${height}px`;
      }

      const controls = document.querySelector('.video-player__controls');
      if (controls) {
        if (width < 200) {
          controls.classList.add('hidden');
        } else {
          controls.classList.remove('hidden');
        }
      }

      const volume = document.querySelector('.video-player__volume-bar');
      if (volume) {
        if (width < 400) {
          volume.classList.add('hidden');
        } else {
          volume.classList.remove('hidden');
        }
      }

      const time = document.querySelector('.video-player__time');
      if (time) {
        if (width < 500) {
          time.classList.add('hidden');
        } else {
          time.classList.remove('hidden');
        }
      }

      return false;
    });
  }

  show(
    left: number,
    top: number,
    width: number,
    height: number,
    onClose?: () => any,
  ) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.scale = 1;
    this.aspect = this.height > 0 ? this.width / this.height : 1;

    this.onClose = onClose;

    this.$modal.style.left = `${left}px`;
    this.$modal.style.top = `${top}px`;
    this.$content.style.width = `${width}px`;

    if (!this.fitHeightToContent) {
      this.$content.style.height = `${height}px`;
    }

    this.$modal.classList.remove('modal--hidden');

    const controls = document.querySelector('.video-player__controls');
    if (controls && width < 200) {
      controls.classList.add('hidden');
    }

    const volume = document.querySelector('.video-player__volume-bar');
    if (volume && width < 400) {
      volume.classList.add('hidden');
    }

    const time = document.querySelector('.video-player__time');
    if (time && width < 500) {
      time.classList.add('hidden');
    }

    this._isOpen = true;
  }

  hide() {
    if (!this.isOpen) {
      return;
    }

    this.$modal.classList.add('modal--hidden');
    this.$modal.classList.remove('modal--dragging');

    if (this.onClose) {
      this.onClose();
    }

    this._isOpen = false;
  }
}
