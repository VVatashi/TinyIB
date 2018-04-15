import IModule from './modules/IModule';
import ExpandFile from './modules/ExpandFile';
import FormMarkup from './modules/FormMarkup';
import FormSave from './modules/FormSave';
import QuotePost from './modules/QuotePost';
import StyleSwitcher from './modules/StyleSwitcher';
import { qid } from './utils/DOM';

const modules: { [key: string]: IModule } = {};
modules['ExpandFile'] = new ExpandFile();
modules['FormMarkup'] = new FormMarkup();
modules['FormSave'] = new FormSave();
modules['QuotePost'] = new QuotePost();
modules['StyleSwitcher'] = new StyleSwitcher();

function reloadCAPTCHA() {
  const captcha = qid('captcha') as HTMLInputElement;
  captcha.value = '';
  captcha.focus();

  const captchaimage = qid('captchaimage') as HTMLImageElement;
  captchaimage.src = captchaimage.src + '#new';

  return false;
}
