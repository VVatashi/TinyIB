import IModule from './modules/IModule';
import StyleSwitcher from './modules/StyleSwitcher';
import { qid, qs } from './utils/DOM';
import * as Cookie from './utils/Cookie';

const modules: { [key: string]: IModule } = {};
modules['StyleSwitcher'] = new StyleSwitcher();

function quotePost(postID: string) {
  const message = qid('message') as HTMLInputElement;
  message.value = message.value + '>>' + postID + '\n';
  message.focus();

  return false;
}

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

function insertBBCode(code: string) {
  const messageEl = qs('#message') as HTMLTextAreaElement;

  const str = messageEl.value;
  const begin = messageEl.selectionStart;
  const end = messageEl.selectionEnd;

  messageEl.value = [
    str.substring(0, begin),
    '[', code, ']',
    str.substring(begin, end),
    '[/', code, ']',
    str.substring(end),
  ].join('');

  messageEl.focus();
  messageEl.selectionStart = begin + code.length + 2;
  messageEl.selectionEnd = begin + code.length + 2 + (end - begin);

  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  // Save name on change
  var nameEl = qs('input[name="name"]') as HTMLInputElement;
  if (nameEl) {
    nameEl.addEventListener('change', function () {
      var expiration_date = new Date();
      expiration_date.setTime(expiration_date.getTime() + (365 * 24 * 60 * 60 * 1000));
      Cookie.set('tinyib_name', nameEl.value, expiration_date);
    }, false);
  }

  // Load name
  const name = Cookie.get('tinyib_name');
  if (name && name != '') {
    if (nameEl) {
      nameEl.value = name;
    }
  }

  // Save delete-password on change
  const newpostpassword = qid('newpostpassword') as HTMLInputElement;
  if (newpostpassword) {
    newpostpassword.addEventListener('change', function () {
      const expiration_date = new Date();
      expiration_date.setFullYear(expiration_date.getFullYear() + 7);
      Cookie.set('tinyib_password', newpostpassword.value, expiration_date);
    }, false);
  }

  // Load delete-password
  const password = Cookie.get('tinyib_password');
  if (password && password != '') {
    if (newpostpassword) {
      newpostpassword.value = password;
    }

    const deletepostpassword = qid('deletepostpassword') as HTMLInputElement;
    if (deletepostpassword) {
      deletepostpassword.value = password;
    }
  }

  // Quote post
  if (window.location.hash) {
    if (window.location.hash.match(/^#q\d+$/i) !== null) {
      const quotePostID = window.location.hash.match(/^#q\d+$/i)[0].substr(2);
      if (quotePostID != '') {
        quotePost(quotePostID);
      }
    }
  }
}, false);
