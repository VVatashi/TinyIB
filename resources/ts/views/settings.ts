import { DateTime } from 'luxon';
import React from 'react';
import ReactDOM from 'react-dom';

import { View } from './view';

import { Hotkeys } from '../components';
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

export class SettingsView implements View {
  readonly model: Model;
  readonly $form: HTMLElement;

  protected updateInterval: number = null;

  constructor($form: HTMLElement) {
    this.$form = $form;

    this.onFormClick = this.onFormClick.bind(this);
    this.onFormChange = this.onFormChange.bind(this);

    this.onHiddenClick = this.onHiddenClick.bind(this);
    this.onHiddenChange = this.onHiddenChange.bind(this);
    this.onAddHiddenClick = this.onAddHiddenClick.bind(this);

    this.onReplacesClick = this.onReplacesClick.bind(this);
    this.onReplacesChange = this.onReplacesChange.bind(this);
    this.onAddReplaceClick = this.onAddReplaceClick.bind(this);

    this.model = new Model();
    this.bindModel();

    this.model.currentTab = 'common';
  }

  protected bindModel() {
    if (!this.$form) {
      return;
    }

    // Bind DOM events to model.
    this.$form.addEventListener('click', this.onFormClick);
    this.$form.addEventListener('change', this.onFormChange);

    const $hidden = DOM.qid('hidden-posts');
    if ($hidden) {
      $hidden.addEventListener('click', this.onHiddenClick);
      $hidden.addEventListener('change', this.onHiddenChange);
    }

    const $hiddenAdd = DOM.qid('hidden-posts-add');
    if ($hiddenAdd) {
      $hiddenAdd.addEventListener('click', this.onAddHiddenClick);
    }

    const $replaces = DOM.qid('form-replaces');
    if ($replaces) {
      $replaces.addEventListener('click', this.onReplacesClick);
      $replaces.addEventListener('change', this.onReplacesChange);
    }

    const $replacesAdd = DOM.qid('form-replaces-add');
    if ($replacesAdd) {
      $replacesAdd.addEventListener('click', this.onAddReplaceClick);
    }

    // Bind tab change to DOM.
    const $tabs = DOM.qsa('[data-tab]', this.$form);
    const $tabsContent = DOM.qsa('[data-tab-content]', this.$form);
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
    const $inputs = DOM.qsa('[data-key]', this.$form);
    $inputs.forEach($input => {
      const key = $input.getAttribute('data-key');
      const value = Settings.get(key);
      if ($input instanceof HTMLInputElement) {
        if ($input.type === 'checkbox') {
          $input.checked = value === 'true' || value === true;
        } else if ($input.type === 'radio') {
          $input.checked = value === $input.value;
        } else if ($input.type !== 'file') {
          $input.value = value as string;
        }
      }
    });

    // Bind hidden post authors.
    const hidden = Settings.get('filter.hidden-authors') as PostAuthor[];
    this.updateHiddenPosts(hidden);

    // Bind replaces list.
    const replaces = Settings.get('form.replaces') as Replace[];
    this.updateReplaces(replaces);

    // Display current time format.
    const $time = DOM.qid('time-preview');
    if ($time) {
      this.updateInterval = setInterval(() => {
        const time = DateTime.fromJSDate(new Date());
        $time.textContent = Time.format(time);
      }, 1000);
    }

    const $postsCustomNotify = DOM.qs('[data-key="post.unread-posts-notify-custom"]');
    if ($postsCustomNotify) {
      const name = Settings.get<string>('post.unread-posts-notify-custom-name');
      const $filename = DOM.qs('.filename', $postsCustomNotify);
      $filename.textContent = name ? name : 'Click to select...';

      const $input = DOM.qs('input', $postsCustomNotify) as HTMLInputElement;
      $input.addEventListener('change', e => {
        if ($input.files.length === 0) {
          return;
        }

        const file = $input.files[0];
        $filename.textContent = file.name;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', e => {
          Settings.set('post.unread-posts-notify-custom', reader.result);
          Settings.set('post.unread-posts-notify-custom-name', file.name);
        });
      });
    }

    const $repliesCustomNotify = DOM.qs('[data-key="post.unread-replies-notify-custom"]');
    if ($repliesCustomNotify) {
      const name = Settings.get<string>('post.unread-replies-notify-custom-name');
      const $filename = DOM.qs('.filename', $repliesCustomNotify);
      $filename.textContent = name ? name : 'Click to select...';

      const $input = DOM.qs('input', $repliesCustomNotify) as HTMLInputElement;
      $input.addEventListener('change', e => {
        if ($input.files.length === 0) {
          return;
        }

        const file = $input.files[0];
        $filename.textContent = file.name;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', e => {
          Settings.set('post.unread-replies-notify-custom', reader.result);
          Settings.set('post.unread-replies-notify-custom-name', file.name);
        });
      });
    }

    const $enableDesktopNotifications = DOM.qid('enable-desktop-notify');
    if ($enableDesktopNotifications) {
      $enableDesktopNotifications.addEventListener('click', e => {
        e.preventDefault();

        const OneSignal = window.OneSignal || [];
        OneSignal.push(function () {
          OneSignal.showNativePrompt();
        });
      });
    }

    const $hotKeys = DOM.qs('.settings-form__hotkeys', this.$form);
    if ($hotKeys) {
      const hotKeys = React.createElement(Hotkeys);
      ReactDOM.render(hotKeys, $hotKeys);
    }
  }

  detach() {
    if (this.$form) {
      this.$form.removeEventListener('click', this.onFormClick);
      this.$form.removeEventListener('change', this.onFormChange);
    }

    const $hidden = DOM.qid('hidden-posts');
    if ($hidden) {
      $hidden.removeEventListener('click', this.onHiddenClick);
      $hidden.removeEventListener('change', this.onHiddenChange);
    }

    const $hiddenAdd = DOM.qid('hidden-posts-add');
    if ($hiddenAdd) {
      $hiddenAdd.removeEventListener('click', this.onAddHiddenClick);
    }

    const $replaces = DOM.qid('form-replaces');
    if ($replaces) {
      $replaces.removeEventListener('click', this.onReplacesClick);
      $replaces.removeEventListener('change', this.onReplacesChange);
    }

    const $replacesAdd = DOM.qid('form-replaces-add');
    if ($replacesAdd) {
      $replacesAdd.removeEventListener('click', this.onAddReplaceClick);
    }

    if (this.updateInterval !== null) {
      clearInterval(this.updateInterval);
    }

    const $hotKeys = DOM.qs('.settings-form__hotkeys', this.$form);
    if ($hotKeys) {
      ReactDOM.unmountComponentAtNode($hotKeys);
    }
  }

  protected onFormClick(e: Event) {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    // Bind tab change from DOM to model.
    if (e.target.hasAttribute('data-tab')) {
      e.preventDefault();
      this.model.currentTab = e.target.getAttribute('data-tab');
      return false;
    }
  }

  protected onFormChange(e: Event) {
    if (e.target instanceof HTMLInputElement && e.target.hasAttribute('data-key')) {
      const key = e.target.getAttribute('data-key');
      if (e.target.type === 'checkbox') {
        Settings.set(key, e.target.checked);
      } else {
        Settings.set(key, e.target.value);
      }
    }
  }

  protected onHiddenClick(e: Event) {
    if (e.target instanceof HTMLButtonElement && e.target.hasAttribute('data-remove-index')) {
      e.preventDefault();
      const index = +e.target.getAttribute('data-remove-index');
      const hidden = Settings.get('filter.hidden-authors') as PostAuthor[];
      hidden.splice(index, 1);
      Settings.set('filter.hidden-authors', hidden);
      this.updateHiddenPosts(hidden);
      return false;
    }
  }

  protected onHiddenChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.hasAttribute('data-name-index')) {
        const index = +e.target.getAttribute('data-name-index');
        const hidden = Settings.get('filter.hidden-authors') as PostAuthor[];
        hidden[index].name = e.target.value;
        Settings.set('filter.hidden-authors', hidden);
      }

      if (e.target.hasAttribute('data-tripcode-index')) {
        const index = +e.target.getAttribute('data-tripcode-index');
        const hidden = Settings.get('filter.hidden-authors') as PostAuthor[];
        hidden[index].tripcode = e.target.value;
        Settings.set('filter.hidden-authors', hidden);
      }
    }
  }

  protected onAddHiddenClick(e: Event) {
    e.preventDefault();
    const hidden = Settings.get('filter.hidden-authors') as PostAuthor[];
    hidden.push({ name: '', tripcode: '' });
    Settings.set('filter.hidden-authors', hidden);
    this.updateHiddenPosts(hidden);
    return false;
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

  protected onReplacesClick(e: Event) {
    if (e.target instanceof HTMLButtonElement && e.target.hasAttribute('data-remove-index')) {
      e.preventDefault();
      const index = +e.target.getAttribute('data-remove-index');
      const replaces = Settings.get('form.replaces') as Replace[];
      replaces.splice(index, 1);
      Settings.set('form.replaces', replaces);
      this.updateReplaces(replaces);
      return false;
    }
  }

  protected onReplacesChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.hasAttribute('data-pattern-index')) {
        const index = +e.target.getAttribute('data-pattern-index');
        const replaces = Settings.get('form.replaces') as Replace[];
        replaces[index].pattern = e.target.value;
        Settings.set('form.replaces', replaces);
      }

      if (e.target.hasAttribute('data-replace-index')) {
        const index = +e.target.getAttribute('data-replace-index');
        const replaces = Settings.get('form.replaces') as Replace[];
        replaces[index].replace = e.target.value;
        Settings.set('form.replaces', replaces);
      }
    }
  }

  protected onAddReplaceClick(e: Event) {
    e.preventDefault();
    const replaces = Settings.get('form.replaces') as Replace[];
    replaces.push({ pattern: '', replace: '' });
    Settings.set('form.replaces', replaces);
    this.updateReplaces(replaces);
    return false;
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
