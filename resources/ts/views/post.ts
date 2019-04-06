import { View } from '.';
import { Post } from '../model';
import { DOM } from '../utils';

export class PostView implements View {
  readonly model: Post;

  constructor(readonly $element: HTMLElement) {
    const id = +$element.getAttribute('data-post-id');

    const $dateTime = DOM.qs('.post-header__datetime', $element);
    const isoDateTime = $dateTime ? $dateTime.getAttribute('datetime') : null;
    const createdAt = isoDateTime ? new Date(isoDateTime).getTime() : 0;

    const $subject = DOM.qs('.post-header__subject', $element);
    const subject = $subject ? $subject.textContent : '';

    const $name = DOM.qs('.post-header__name', $element);
    const name = $name ? $name.textContent : '';

    const $tripcode = DOM.qs('.post-header__tripcode', $element);
    const tripcode = $tripcode ? $tripcode.textContent : '';

    const $thumbnail = DOM.qs('.thumbnail__content', $element);
    const thumbnail = $thumbnail ? $thumbnail.getAttribute('src') : null;

    const $fileLink = DOM.qs('.file__thumbnail', $element);
    const file = $fileLink ? $fileLink.getAttribute('href') : null;

    const fileWidth = $fileLink ? +$fileLink.getAttribute('data-width') : null;
    const fileHeight = $fileLink ? +$fileLink.getAttribute('data-height') : null;

    const $references = DOM.qsa('a[data-target-post-id]', $element);
    const referencedIds = $references.map($reference => {
      return +$reference.getAttribute('data-target-post-id');
    });

    this.model = new Post(
      id,
      createdAt,
      subject,
      name,
      tripcode,
      thumbnail,
      file,
      fileWidth,
      fileHeight,
      referencedIds,
    );

    if ($dateTime) {
      $dateTime.textContent = this.model.formattedTime;
    }

    if (this.model.isOwn) {
      $element.classList.add('post--own');
    }
  }
}
