import IModule from './modules/IModule';
import FormMarkup from './modules/FormMarkup';
import FormSave from './modules/FormSave';
import QuotePost from './modules/QuotePost';
import StyleSwitcher from './modules/StyleSwitcher';
import { qid } from './utils/DOM';

const modules: { [key: string]: IModule } = {};
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

function scrollIntoView(el: HTMLElement) {
  const wY = window.scrollY || window.pageYOffset;
  const wH = window.innerHeight;

  let elY = 0;
  let elH = 0;

  for (let p = el; p && p.tagName != 'BODY'; p = p.offsetParent as HTMLElement) {
    elY += p.offsetTop;
  }

  elH = el.offsetHeight;

  if (wY + wH < elY + elH) {
    el.scrollIntoView(false);
  } else if (elY < wY) {
    el.scrollIntoView(true);
  }
}

function expandFile(e: MouseEvent, id: number) {
  if (e == undefined || e.which == undefined || e.which == 1) {
    const wrapper = qid('thumbnail-wrapper_' + id);
    const file = qid('file_' + id);

    if (wrapper.getAttribute('expanded') != 'true') {
      const expand = qid('expand_' + id);

      wrapper.setAttribute('expanded', 'true');
      file.innerHTML = decodeURIComponent(expand.textContent);
      file.style.visibility = 'hidden';

      setTimeout(function (id) {
        return function () {
          wrapper.style.display = 'none';
          file.style.visibility = 'visible';
          file.style.display = '';
          scrollIntoView(file);
        }
      }(id), 100);
    } else {
      file.style.display = 'none';
      file.innerHTML = '';
      wrapper.style.display = '';
      wrapper.setAttribute('expanded', 'false');

      const thumbnail = qid('thumbnail_' + id);
      scrollIntoView(thumbnail);
    }

    return false;
  }

  return true;
}
