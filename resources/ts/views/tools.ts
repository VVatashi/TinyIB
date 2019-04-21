import { View, SettingsView } from '.';
import { Tools } from '../model';
import { DOM, Keyboard } from '../utils';
import { API } from '../services';

export class ToolsView implements View {
  readonly model: Tools;

  protected $settingsPopup: HTMLElement = null;
  protected settingsView: SettingsView = null;

  constructor(readonly $tools: HTMLElement) {
    this.model = new Tools();

    const btnActiveClass = 'tools__button--active';

    const $toggleSettings = DOM.qs('#tools-toggle-settings', $tools);
    if ($toggleSettings) {
      $toggleSettings.addEventListener('click', e => {
        e.preventDefault();
        this.model.toggleSettings();
        return false;
      });

      if (this.model.isSettingsOpened) {
        $toggleSettings.classList.add(btnActiveClass);
      } else {
        $toggleSettings.classList.remove(btnActiveClass);
      }
    }

    const $toggleNsfw = DOM.qs('#tools-toggle-nsfw', $tools);
    if ($toggleNsfw) {
      $toggleNsfw.addEventListener('click', e => {
        e.preventDefault();
        this.model.toggleNsfw();
        return false;
      });

      if (this.model.nsfw) {
        $toggleNsfw.classList.add(btnActiveClass);
      } else {
        $toggleNsfw.classList.remove(btnActiveClass);
      }
    }

    const $toggleAutoPlay = DOM.qs('#tools-toggle-autoplay', $tools);
    if ($toggleAutoPlay) {
      $toggleAutoPlay.addEventListener('click', e => {
        e.preventDefault();
        this.model.toggleAutoPlay();
        return false;
      });

      if (this.model.autoPlay) {
        $toggleAutoPlay.classList.add(btnActiveClass);
      } else {
        $toggleAutoPlay.classList.remove(btnActiveClass);
      }
    }

    const $scrollTop = DOM.qs('#tools-scroll-top', $tools);
    if ($scrollTop) {
      $scrollTop.addEventListener('click', e => {
        e.preventDefault();
        this.model.scrollToTop();
        return false;
      });
    }

    const $scrollBottom = DOM.qs('#tools-scroll-bottom', $tools);
    if ($scrollBottom) {
      $scrollBottom.addEventListener('click', e => {
        e.preventDefault();
        this.model.scrollToBottom();
        return false;
      });
    }

    document.addEventListener('keydown', e => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (Keyboard.checkKeyChar(e, 'b')) {
        e.preventDefault();
        this.model.toggleNsfw();
        return false;
      }
    }, true);

    this.model.on('settings-opened', async () => {
      this.$settingsPopup = document.createElement('div');
      this.$settingsPopup.classList.add('popup', 'popup--settings');

      const $body = document.createElement('div');
      $body.classList.add('popup__body');
      $body.innerHTML = await API.getSettingsHtml();
      this.$settingsPopup.appendChild($body);

      document.body.appendChild(this.$settingsPopup);

      this.settingsView = new SettingsView(this.$settingsPopup);

      $toggleSettings.classList.add(btnActiveClass);
    });

    this.model.on('settings-closed', () => {
      this.settingsView.detach();
      this.settingsView = null;

      this.$settingsPopup.remove();
      this.$settingsPopup = null;

      $toggleSettings.classList.remove(btnActiveClass);
    });

    this.model.on('toggle-nsfw', (nsfw: boolean) => {
      const $layout = DOM.qs('.layout');
      if ($layout) {
        const nsfwClass = 'layout--nsfw';
        if (nsfw) {
          $layout.classList.add(nsfwClass);
        } else {
          $layout.classList.remove(nsfwClass);
        }
      }

      if ($toggleNsfw) {
        if (nsfw) {
          $toggleNsfw.classList.add(btnActiveClass);
        } else {
          $toggleNsfw.classList.remove(btnActiveClass);
        }
      }
    });

    this.model.on('toggle-autoplay', (autoPlay: boolean) => {
      if ($toggleAutoPlay) {
        if (autoPlay) {
          $toggleAutoPlay.classList.add(btnActiveClass);
        } else {
          $toggleAutoPlay.classList.remove(btnActiveClass);
        }
      }
    });

    const $container = document.documentElement || document.body;
    if ($container) {
      this.model.on('scroll-top', () => {
        $container.scrollTop = 0;
      });

      this.model.on('scroll-bottom', () => {
        $container.scrollTop = document.body.scrollHeight;
      });
    }
  }
}
