import { DateTime } from 'luxon';
import { eventBus, Events } from '../..';
import { DOM } from '../../utils';

export class PostCorrectTime {
  constructor() {
    eventBus.on(Events.PostsInserted, (posts: Element[]) =>
      posts.forEach(this.onPostInsert.bind(this)));
  }

  protected onPostInsert(post: Element) {
    const timeEl = DOM.qs('.post__date', post) as HTMLTimeElement;
    if (timeEl) {
      const timeIso = timeEl.getAttribute('datetime');
      const time = DateTime.fromISO(timeIso);
      timeEl.textContent = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    }
  }
}
