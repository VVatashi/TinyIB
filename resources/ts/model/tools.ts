import { EventEmitter } from '../utils';

export class Tools extends EventEmitter {
  scrollToTop() {
    this.emit('scroll-top');
  }

  scrollToBottom() {
    this.emit('scroll-bottom');
  }
}
