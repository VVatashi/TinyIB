import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid } from '../utils/DOM';

export default class FormMarkup extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  onReady() {
    const buttons: { [key: string]: EventListener } = {
      'markup_quote': () => this.insertMarkup('\n>', '\n'),
      'markup_b': () => this.insertBBCode('b'),
      'markup_i': () => this.insertBBCode('i'),
      'markup_u': () => this.insertBBCode('u'),
      'markup_s': () => this.insertBBCode('s'),
      'markup_sup': () => this.insertBBCode('sup'),
      'markup_sub': () => this.insertBBCode('sub'),
      'markup_spoiler': () => this.insertBBCode('spoiler'),
      'markup_code': () => this.insertBBCode('code'),
      'markup_rp': () => this.insertBBCode('rp'),
    };

    const ids = Object.keys(buttons);

    ids.forEach((id) => {
      const button = qid(id);

      if (button) {
        button.addEventListener('click', buttons[id]);
      }
    });
  }

  protected insertMarkup(before: string, after: string) {
    const message = qid('message') as HTMLTextAreaElement;

    const str = message.value;
    const begin = message.selectionStart;
    const end = message.selectionEnd;

    message.value = [
      str.substring(0, begin),
      before,
      str.substring(begin, end),
      after,
      str.substring(end),
    ].join('');

    message.focus();
    message.selectionStart = begin + before.length;
    message.selectionEnd = begin + before.length + (end - begin);

    return false;
  }

  protected insertBBCode(code: string) {
    return this.insertMarkup(`[${code}]`, `[/${code}]`);
  }
}
