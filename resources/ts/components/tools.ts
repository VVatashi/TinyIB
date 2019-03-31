import { DOM } from "../utils";
import { eventBus } from "../event-bus";
import { Events } from "../events";

export class Tools {
  constructor() {
    eventBus.$on(Events.Ready, () => {
      const scrollTop = DOM.qid('tools-scroll-top');
      if (scrollTop) {
        scrollTop.addEventListener('click', e => {
          e.preventDefault();

          document.documentElement.scrollTop = 0;

          return false;
        });
      }

      const scrollBottom = DOM.qid('tools-scroll-bottom');
      if (scrollBottom) {
        scrollBottom.addEventListener('click', e => {
          e.preventDefault();

          document.documentElement.scrollTop = document.body.scrollHeight;

          return false;
        });
      }
    });
  }
}
