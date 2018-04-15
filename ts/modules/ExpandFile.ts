import IModule from './IModule';
import { qid, qsa } from '../utils/DOM';

export default class ExpandFile implements IModule {
  public constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.onLoad();

      // Wait one second for userscripts init
      // TODO: Try use MutationObserver instead?
      setTimeout(() => {
        // Try detect Dollchan Extension
        const de = qid('de-main');
  
        if (de) {
          // DE breaks some event handlers, so needs to reattach them
          this.onLoad();
        }
      }, 1000);
    });
  }

  protected onLoad() {
    const links = qsa('.file-info__link, .thumbnail');

    for (let i = 0; i < links.length; ++i) {
      const id = Number(links[i].getAttribute('data-id'));
      links[i].addEventListener('click', (e) => this.expandFile(e as MouseEvent, id));
    }

    const files = qsa('.original');

    for (let i = 0; i < files.length; ++i) {
      const id = Number(files[i].getAttribute('data-id'));
      files[i].addEventListener('click', (e) => this.expandFile(e as MouseEvent, id));
    }
  }

  protected scrollIntoView(element: HTMLElement) {
    const window_pos = window.scrollY || window.pageYOffset;
    const window_height = window.innerHeight;

    let element_pos = 0;
    const element_height = element.offsetHeight;

    for (let p = element; p && p.tagName !== 'BODY'; p = p.offsetParent as HTMLElement) {
      element_pos += p.offsetTop;
    }

    if (window_pos + window_height < element_pos + element_height) {
      element.scrollIntoView(false);
    } else if (element_pos < window_pos) {
      element.scrollIntoView(true);
    }
  }

  protected expandFile(e: MouseEvent, id: number) {
    if (e === undefined || e.which === undefined || e.which === 1) {
      if (e) {
        e.preventDefault();
      }

      const thumbnail = qid(`thumbnail_wrapper_${id}`);
      const original = qid(`original_wrapper_${id}`);

      if (thumbnail.getAttribute('data-expanded') !== 'true') {
        thumbnail.setAttribute('data-expanded', 'true');

        // Load original file
        const expand = qid(`expand_${id}`);
        original.innerHTML = decodeURIComponent(expand.textContent);
        original.style.visibility = 'hidden';

        setTimeout(() => {
          // Hide thumbnail
          thumbnail.style.display = 'none';

          // Show original file
          original.style.visibility = 'visible';
          original.style.display = '';
          this.scrollIntoView(original);
        }, 100);
      } else {
        thumbnail.setAttribute('data-expanded', 'false');

        // Hide original file
        original.style.display = 'none';
        original.innerHTML = '';

        // Show thumbnail
        thumbnail.style.display = '';
        const thumbnail_content = qid(`thumbnail_${id}`);
        this.scrollIntoView(thumbnail_content);
      }

      return false;
    }

    return true;
  }
}
