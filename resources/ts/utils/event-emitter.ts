type Listener = (...args: any[]) => any;
type ListenerCollection = { [event: string]: Listener[] };

export class EventEmitter {
  private readonly listeners: ListenerCollection = {};

  on(event: string, listener: Listener) {
    if (this.listeners[event]) {
      this.listeners[event].push(listener);
    } else {
      this.listeners[event] = [listener];
    }
  }

  off(event: string, listener?: Listener) {
    if (!this.listeners[event]) {
      return;
    }

    if (listener) {
      this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    } else {
      delete this.listeners[event];
    }
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(l => l.apply(this, args));
  }
}
