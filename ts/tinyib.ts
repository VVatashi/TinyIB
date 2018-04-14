declare interface Window {
  styles: {
    [key: string]: string,
  };
}

function qid(id: string) {
  return document.getElementById(id);
}

function qs(selector: string) {
  return document.querySelector(selector);
}

function qsa(selector: string) {
  return document.querySelectorAll(selector);
}

function getCookie(name: string) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length == 2) {
    return parts.pop().split(';').shift();
  }
}

function setCookie(name: string, value: any, expiration: Date) {
  document.cookie = name + '=' + value + '; path=/; expires=' + expiration.toUTCString();
}

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

function setStyle(url: string) {
  const headEl = qs('head');

  if (!headEl) {
    return;
  }

  const selectedStyleEl = qs('head > link[data-selected]');

  if (selectedStyleEl) {
    selectedStyleEl.remove();
  }

  headEl.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url + '" data-selected="true" />';

  let title = '';
  const styles = Object.keys(window.styles);
  for (let i = 0; i < styles.length; ++i) {
    if (window.styles[styles[i]] === url) {
      title = styles[i]
      break;
    }
  }

  const expiration_date = new Date();
  expiration_date.setTime(expiration_date.getTime() + (365 * 24 * 60 * 60 * 1000));
  setCookie('tinyib_style', encodeURIComponent(title), expiration_date);
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

(function () {
  window.styles = {};

  const styleEls = qsa('head > link[title]');
  for (let i = 0; i < styleEls.length; ++i) {
    const styleEl = styleEls[i] as HTMLElement;
    const title = styleEl.title;
    const url = styleEl.getAttribute('href');
    window.styles[title] = url;
    styleEl.remove();
  }

  const defaultStyleUrl = window.styles['Futaba'] || '';
  let styleTitle = getCookie('tinyib_style');
  if (styleTitle) {
    styleTitle = decodeURIComponent(styleTitle);
    const styleUrl = window.styles[styleTitle];
    if (styleUrl) {
      setStyle(styleUrl);
    } else {
      setStyle(defaultStyleUrl);
    }
  } else {
    setStyle(defaultStyleUrl);
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  // Load styles
  const styleSwitcherEl = qid('style-switcher');
  if (styleSwitcherEl) {
    const styles = Object.keys(window.styles);
    for (let i = 0; i < styles.length; ++i) {
      const title = styles[i];
      const url = window.styles[title];
      styleSwitcherEl.innerHTML += '<option value="' + url + '">' + title + '</option>';
    }
  }

  // Save name on change
  var nameEl = qs('input[name="name"]') as HTMLInputElement;
  if (nameEl) {
    nameEl.addEventListener('change', function () {
      var expiration_date = new Date();
      expiration_date.setTime(expiration_date.getTime() + (365 * 24 * 60 * 60 * 1000));
      setCookie('tinyib_name', encodeURIComponent(nameEl.value), expiration_date);
    }, false);
  }

  // Load name
  const name = getCookie('tinyib_name');
  if (name && name != '') {
    if (nameEl) {
      nameEl.value = decodeURIComponent(name);
    }
  }

  // Save delete-password on change
  const newpostpassword = qid('newpostpassword') as HTMLInputElement;
  if (newpostpassword) {
    newpostpassword.addEventListener('change', function () {
      const expiration_date = new Date();
      expiration_date.setFullYear(expiration_date.getFullYear() + 7);
      setCookie('tinyib_password', encodeURIComponent(newpostpassword.value), expiration_date);
    }, false);
  }

  // Load delete-password
  const password = getCookie('tinyib_password');
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
