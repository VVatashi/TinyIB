const pointerEvents = 'PointerEvent' in window;
const touchEvents = 'ontouchstart' in window;

interface Coords { x: number, y: number }

export const draggable = {
  mounted() {
    if (!this.getDragHandle) {
      return;
    }

    const handle = this.getDragHandle() as HTMLElement;
    if (!handle) {
      return;
    }

    this._mouseDown = this._onMouseDown.bind(this);

    if (pointerEvents) {
      handle.addEventListener('pointerdown', this._mouseDown);
    } else {
      if (touchEvents) {
        handle.addEventListener('touchstart', this._mouseDown);
      }

      handle.addEventListener('mousedown', this._mouseDown);
    }
  },
  methods: {
    _onMouseDown(e: PointerEvent | TouchEvent) {
      if (!this.getDraggable) {
        return;
      }

      const draggable = this.getDraggable() as HTMLElement;
      if (!draggable) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      this._draggablePosition = {
        x: draggable.offsetLeft,
        y: draggable.offsetTop,
      };

      if (e instanceof MouseEvent || e instanceof PointerEvent) {
        this._dragStart = {
          x: e.clientX,
          y: e.clientY,
        };
      } else {
        const touch = e.touches[0];
        this._dragStart = {
          x: touch.clientX,
          y: touch.clientY,
        };
      }

      if (!this._mouseMove) {
        this._mouseMove = this._onMouseMove.bind(this);

        if (pointerEvents) {
          window.addEventListener('pointermove', this._mouseMove);
        } else {
          if (touchEvents) {
            window.addEventListener('touchmove', this._mouseMove);
          }

          window.addEventListener('mousemove', this._mouseMove);
        }
      }

      if (!this._mouseUp) {
        this._mouseUp = this._onMouseUp.bind(this);

        if (pointerEvents) {
          window.addEventListener('pointerup', this._mouseUp);
          window.addEventListener('pointercancel', this._mouseUp);
        } else {
          if (touchEvents) {
            window.addEventListener('touchend', this._mouseUp);
            window.addEventListener('touchcancel', this._mouseUp);
          }

          window.addEventListener('mouseup', this._mouseUp);
        }
      }
    },
    _checkBounds({ x, y }: Coords): Coords {
      if (!this.getDraggable) {
        return { x, y };
      }

      const draggable = this.getDraggable() as HTMLElement;
      if (!draggable) {
        return { x, y };
      }

      const rect = draggable.getBoundingClientRect();
      const minX = 0;
      const minY = 0;
      const maxX = document.body.clientWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      return {
        x: Math.min(Math.max(minX, x), maxX),
        y: Math.min(Math.max(minY, y), maxY),
      };
    },
    _onMouseMove(e: PointerEvent | TouchEvent) {
      if (!this.getDraggable) {
        return;
      }

      const draggable = this.getDraggable() as HTMLElement;
      if (!draggable) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      let deltaX = 0;
      let deltaY = 0;

      if (e instanceof MouseEvent || e instanceof PointerEvent) {
        deltaX = e.clientX - this._dragStart.x;
        deltaY = e.clientY - this._dragStart.y;
      } else {
        const touch = e.touches[0];
        deltaX = touch.clientX - this._dragStart.x;
        deltaY = touch.clientY - this._dragStart.y;
      }

      const coords = this._checkBounds({
        x: this._draggablePosition.x + deltaX,
        y: this._draggablePosition.y + deltaY,
      });

      draggable.style.left = `${coords.x}px`;
      draggable.style.top = `${coords.y}px`;
    },
    _onMouseUp(e: PointerEvent | TouchEvent) {
      if (this._mouseMove) {
        if (pointerEvents) {
          window.removeEventListener('pointermove', this._mouseMove);
        } else {
          if (touchEvents) {
            window.removeEventListener('touchmove', this._mouseMove);
          }

          window.removeEventListener('mousemove', this._mouseMove);
        }
      }

      if (this._mouseUp) {
        if (pointerEvents) {
          window.removeEventListener('pointerup', this._mouseUp);
          window.removeEventListener('pointercancel', this._mouseUp);
        } else {
          if (touchEvents) {
            window.removeEventListener('touchend', this._mouseUp);
            window.removeEventListener('touchcancel', this._mouseUp);
          }

          window.removeEventListener('mouseup', this._mouseUp);
        }
      }

      this._mouseMove = null;
      this._mouseUp = null;
    },
  },
};
