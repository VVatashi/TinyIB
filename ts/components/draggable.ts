const pointerEvents = 'PointerEvent' in window;
const touchEvents = 'ontouchstart' in window;

export interface Coords { x: number, y: number }

export const draggable = {
  mounted() {
    const handle = this.getDragHandle();
    if (!handle) {
      return;
    }

    this.draggableResize = this.onDraggableResize.bind(this);
    this.draggableMouseDown = this.onDraggableMouseDown.bind(this);

    window.addEventListener('resize', this.draggableResize);

    if (pointerEvents) {
      handle.addEventListener('pointerdown', this.draggableMouseDown);
    } else {
      if (touchEvents) {
        handle.addEventListener('touchstart', this.draggableMouseDown);
      }

      handle.addEventListener('mousedown', this.draggableMouseDown);
    }

    //this.setPosition(this.checkBounds(this.getPosition()));
  },
  beforeDestroy() {
    if (this.draggableResize) {
      window.removeEventListener('resize', this.draggableResize);
    }

    const handle = this.getDragHandle();
    if (handle) {
      if (pointerEvents) {
        handle.removeEventListener('pointerdown', this.draggableMouseDown);
      } else {
        if (touchEvents) {
          handle.removeEventListener('touchstart', this.draggableMouseDown);
        }

        handle.removeEventListener('mousedown', this.draggableMouseDown);
      }
    }
  },
  methods: {
    getDragHandle(): HTMLElement {
      return null;
    },
    getDraggable(): HTMLElement {
      return null;
    },
    getPosition(): Coords {
      const draggable = this.getDraggable();
      if (!draggable) {
        return { x: 0, y: 0 };
      }

      return {
        x: draggable.offsetLeft,
        y: draggable.offsetTop,
      };
    },
    setPosition(coords: Coords) {
      const draggable = this.getDraggable();
      if (!draggable) {
        return;
      }

      draggable.style.left = `${coords.x}px`;
      draggable.style.top = `${coords.y}px`;
    },
    checkBounds({ x, y }: Coords): Coords {
      const draggable = this.getDraggable();
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
    onDraggableResize() {
      this.setPosition(this.checkBounds(this.getPosition()));
    },
    onDraggableMouseDown(e: PointerEvent | TouchEvent) {
      const draggable = this.getDraggable();
      if (!draggable) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      this._draggablePosition = this.getPosition();

      if (e instanceof MouseEvent
        || pointerEvents && e instanceof PointerEvent) {
        this._dragStart = {
          x: e.clientX,
          y: e.clientY,
        };
      } else if (touchEvents && e instanceof TouchEvent) {
        const touch = e.touches[0];
        this._dragStart = {
          x: touch.clientX,
          y: touch.clientY,
        };
      }

      if (!this.draggableMouseMove) {
        this.draggableMouseMove = this.onDraggableMouseMove.bind(this);

        if (pointerEvents) {
          window.addEventListener('pointermove', this.draggableMouseMove);
        } else {
          if (touchEvents) {
            window.addEventListener('touchmove', this.draggableMouseMove);
          }

          window.addEventListener('mousemove', this.draggableMouseMove);
        }
      }

      if (!this.draggableMouseUp) {
        this.draggableMouseUp = this.onDraggableMouseUp.bind(this);

        if (pointerEvents) {
          window.addEventListener('pointerup', this.draggableMouseUp);
          window.addEventListener('pointercancel', this.draggableMouseUp);
        } else {
          if (touchEvents) {
            window.addEventListener('touchend', this.draggableMouseUp);
            window.addEventListener('touchcancel', this.draggableMouseUp);
          }

          window.addEventListener('mouseup', this.draggableMouseUp);
        }
      }
    },
    onDraggableMouseMove(e: PointerEvent | TouchEvent) {
      const draggable = this.getDraggable();
      if (!draggable) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      let deltaX = 0;
      let deltaY = 0;

      if (e instanceof MouseEvent
        || pointerEvents && e instanceof PointerEvent) {
        deltaX = e.clientX - this._dragStart.x;
        deltaY = e.clientY - this._dragStart.y;
      } else if (touchEvents && e instanceof TouchEvent) {
        const touch = e.touches[0];
        deltaX = touch.clientX - this._dragStart.x;
        deltaY = touch.clientY - this._dragStart.y;
      }

      this.setPosition(this.checkBounds({
        x: this._draggablePosition.x + deltaX,
        y: this._draggablePosition.y + deltaY,
      }));
    },
    onDraggableMouseUp(e: PointerEvent | TouchEvent) {
      if (this.draggableMouseMove) {
        if (pointerEvents) {
          window.removeEventListener('pointermove', this.draggableMouseMove);
        } else {
          if (touchEvents) {
            window.removeEventListener('touchmove', this.draggableMouseMove);
          }

          window.removeEventListener('mousemove', this.draggableMouseMove);
        }
      }

      if (this.draggableMouseUp) {
        if (pointerEvents) {
          window.removeEventListener('pointerup', this.draggableMouseUp);
          window.removeEventListener('pointercancel', this.draggableMouseUp);
        } else {
          if (touchEvents) {
            window.removeEventListener('touchend', this.draggableMouseUp);
            window.removeEventListener('touchcancel', this.draggableMouseUp);
          }

          window.removeEventListener('mouseup', this.draggableMouseUp);
        }
      }

      this.draggableMouseMove = null;
      this.draggableMouseUp = null;
    },
  },
};
