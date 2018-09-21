import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs } from '../../utils/DOM';
import { DateTime } from 'luxon';

export default class PostCorrectTime extends PostModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) {
    const timeEl = qs('.post__date', post) as HTMLTimeElement;
    if (timeEl) {
      const timeIso = timeEl.getAttribute('datetime');
      const time = DateTime.fromISO(timeIso);
      timeEl.textContent = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    }
  }
}
