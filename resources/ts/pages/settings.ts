import { DateTime } from 'luxon';

import { BasePage } from './base';

import { Settings as Model } from '../model';
import { Settings } from '../services';
import { DOM, Time } from '../utils';

interface PostAuthor {
  name: string;
  tripcode: string;
}

interface Replace {
  pattern: string;
  replace: string;
}

export class SettingsPage extends BasePage {
  readonly model: Model;

  constructor() {
    super();
    this.model = new Model();
    this.bindModel();
    this.model.currentTab = 'common';
  }

  protected bindModel() {
    const $form = DOM.qid('settings-form');
    if (!$form) {
      return;
    }

    $form.addEventListener('click', e => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      // Bind tab change from DOM to model.
      if (e.target.hasAttribute('data-tab')) {
        e.preventDefault();
        this.model.currentTab = e.target.getAttribute('data-tab');
        return false;
      }
    });

    // Bind tab change from model to DOM.
    const $tabs = DOM.qsa('[data-tab]', $form);
    const $tabsContent = DOM.qsa('[data-tab-content]', $form);
    this.model.on(Model.TAB_CHANGED, (tab: string) => {
      $tabs.forEach($tab => {
        const tabActiveClass = 'settings-form__tab--active';
        const tabId = $tab.getAttribute('data-tab');
        if (tabId === tab) {
          $tab.classList.add(tabActiveClass);
        } else {
          $tab.classList.remove(tabActiveClass);
        }
      });

      $tabsContent.forEach($content => {
        const tabId = $content.getAttribute('data-tab-content');
        if (tabId === tab) {
          $content.classList.remove('hidden');
        } else {
          $content.classList.add('hidden');
        }
      });
    });

    // Bind initial settings values to DOM.
    const $inputs = DOM.qsa('[data-key]', $form);
    $inputs.forEach($input => {
      const key = $input.getAttribute('data-key');
      const defaultValue = $input.getAttribute('data-default');
      const value = Settings.get(key, defaultValue).toString();
      if ($input instanceof HTMLInputElement) {
        if ($input.type === 'checkbox') {
          $input.checked = value === 'true';
        } else if ($input.type === 'radio') {
          $input.checked = value === $input.value;
        } else {
          $input.value = value;
        }
      }
    });

    // Bind inputs changes to model.
    $form.addEventListener('change', e => {
      if (e.target instanceof HTMLInputElement && e.target.hasAttribute('data-key')) {
        const key = e.target.getAttribute('data-key');
        if (e.target.type === 'checkbox') {
          Settings.set(key, e.target.checked);
        } else {
          Settings.set(key, e.target.value);
        }
      }
    });

    // Bind hidden post authors.
    const hidden = Settings.get('common.hidden-posts', []) as PostAuthor[];
    this.updateHiddenPosts(hidden);

    const $hidden = DOM.qid('hidden-posts');
    if ($hidden) {
      $hidden.addEventListener('click', e => {
        if (e.target instanceof HTMLButtonElement && e.target.hasAttribute('data-remove-index')) {
          e.preventDefault();
          const index = +e.target.getAttribute('data-remove-index');
          const hidden = Settings.get('common.hidden-posts', []) as PostAuthor[];
          hidden.splice(index, 1);
          Settings.set('common.hidden-posts', hidden);
          this.updateHiddenPosts(hidden);
          return false;
        }
      });

      $hidden.addEventListener('change', e => {
        if (e.target instanceof HTMLInputElement) {
          if (e.target.hasAttribute('data-name-index')) {
            const index = +e.target.getAttribute('data-name-index');
            const hidden = Settings.get('common.hidden-posts', []) as PostAuthor[];
            hidden[index].name = e.target.value;
            Settings.set('common.hidden-posts', hidden);
          }

          if (e.target.hasAttribute('data-tripcode-index')) {
            const index = +e.target.getAttribute('data-tripcode-index');
            const hidden = Settings.get('common.hidden-posts', []) as PostAuthor[];
            hidden[index].tripcode = e.target.value;
            Settings.set('common.hidden-posts', hidden);
          }
        }
      });
    }

    const $hiddenAdd = DOM.qid('hidden-posts-add');
    if ($hiddenAdd) {
      $hiddenAdd.addEventListener('click', e => {
        e.preventDefault();
        const hidden = Settings.get('common.hidden-posts', []) as PostAuthor[];
        hidden.push({ name: '', tripcode: '' });
        Settings.set('common.hidden-posts', hidden);
        this.updateHiddenPosts(hidden);
        return false;
      });
    }

    // Bind replaces list.
    const replaces = Settings.get('form.replaces', []) as Replace[];
    this.updateReplaces(replaces);

    const $replaces = DOM.qid('form-replaces');
    if ($replaces) {
      $replaces.addEventListener('click', e => {
        if (e.target instanceof HTMLButtonElement && e.target.hasAttribute('data-remove-index')) {
          e.preventDefault();
          const index = +e.target.getAttribute('data-remove-index');
          const replaces = Settings.get('form.replaces', []) as Replace[];
          replaces.splice(index, 1);
          Settings.set('form.replaces', replaces);
          this.updateReplaces(replaces);
          return false;
        }
      });

      $replaces.addEventListener('change', e => {
        if (e.target instanceof HTMLInputElement) {
          if (e.target.hasAttribute('data-pattern-index')) {
            const index = +e.target.getAttribute('data-pattern-index');
            const replaces = Settings.get('form.replaces', []) as Replace[];
            replaces[index].pattern = e.target.value;
            Settings.set('form.replaces', replaces);
          }

          if (e.target.hasAttribute('data-replace-index')) {
            const index = +e.target.getAttribute('data-replace-index');
            const replaces = Settings.get('form.replaces', []) as Replace[];
            replaces[index].replace = e.target.value;
            Settings.set('form.replaces', replaces);
          }
        }
      });
    }

    const $replacesAdd = DOM.qid('form-replaces-add');
    if ($replacesAdd) {
      $replacesAdd.addEventListener('click', e => {
        e.preventDefault();
        const replaces = Settings.get('form.replaces', []) as Replace[];
        replaces.push({ pattern: '', replace: '' });
        Settings.set('form.replaces', replaces);
        this.updateReplaces(replaces);
        return false;
      });
    }

    // Display current time format.
    const $time = DOM.qid('time-preview');
    if ($time) {
      setInterval(() => {
        const time = DateTime.fromJSDate(new Date());
        $time.textContent = Time.format(time);
      }, 1000);
    }
  }

  protected updateHiddenPosts(hidden: PostAuthor[]) {
    const $hidden = DOM.qid('hidden-posts');
    if (!$hidden) {
      return;
    }

    while ($hidden.lastChild) {
      $hidden.removeChild($hidden.lastChild);
    }

    hidden.forEach((hidden, index) => {
      const $item = document.createElement('li');
      $item.classList.add('settings-form__list-item');

      const $name = document.createElement('input');
      $name.classList.add('input', 'settings-form__text');
      $name.setAttribute('type', 'text');
      $name.setAttribute('placeholder', 'Name');
      $name.setAttribute('data-name-index', index.toString());
      $name.value = hidden.name;
      $item.appendChild($name);

      const $tripcode = document.createElement('input');
      $tripcode.classList.add('input', 'settings-form__text');
      $tripcode.setAttribute('type', 'text');
      $tripcode.setAttribute('placeholder', '!Tripcode');
      $tripcode.setAttribute('data-tripcode-index', index.toString());
      $tripcode.value = hidden.tripcode;
      $item.appendChild($tripcode);

      const $remove = document.createElement('button');
      $remove.classList.add('button');
      $remove.setAttribute('data-remove-index', index.toString());
      $remove.textContent = 'Remove';
      $item.appendChild($remove);

      $hidden.appendChild($item);
    });
  }

  protected updateReplaces(replaces: Replace[]) {
    const $replaces = DOM.qid('form-replaces');
    if (!$replaces) {
      return;
    }

    while ($replaces.lastChild) {
      $replaces.removeChild($replaces.lastChild);
    }

    replaces.forEach((replace, index) => {
      const $item = document.createElement('li');
      $item.classList.add('settings-form__list-item');

      const $pattern = document.createElement('input');
      $pattern.classList.add('input', 'settings-form__text');
      $pattern.setAttribute('type', 'text');
      $pattern.setAttribute('placeholder', 'Pattern');
      $pattern.setAttribute('data-pattern-index', index.toString());
      $pattern.value = replace.pattern;
      $item.appendChild($pattern);

      const $replace = document.createElement('input');
      $replace.classList.add('input', 'settings-form__text');
      $replace.setAttribute('type', 'text');
      $replace.setAttribute('placeholder', 'Replace');
      $replace.setAttribute('data-replace-index', index.toString());
      $replace.value = replace.replace;
      $item.appendChild($replace);

      const $remove = document.createElement('button');
      $remove.classList.add('button');
      $remove.setAttribute('data-remove-index', index.toString());
      $remove.textContent = 'Remove';
      $item.appendChild($remove);

      $replaces.appendChild($item);
    });
  }
}
