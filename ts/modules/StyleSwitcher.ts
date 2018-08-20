import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid, qs, qsa } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';

export default class StyleSwitcher extends BaseModule {
  protected readonly styles: { [key: string]: string } = {};

  constructor(manager: ModuleManager) {
    super(manager);

    // Parse selectable styles from <head>
    const styles = qsa('link[title]');

    for (let i = 0; i < styles.length; ++i) {
      const style = styles[i] as HTMLElement;

      const title = style.title;
      const url = style.getAttribute('href');

      this.styles[title] = url;

      style.remove();
    }

    // Get selected style
    const selected_style = Cookie.get('tinyib_style', 'Synthwave');
    this.setStyle(selected_style);
  }

  onReady() {
    const style_switcher = qid('style-switcher') as HTMLSelectElement;

    if (style_switcher) {
      // Populate style switcher widget
      const styles = Object.keys(this.styles);

      for (let i = 0; i < styles.length; ++i) {
        const title = styles[i];

        style_switcher.innerHTML += `<option class="style-switcher__option" value="${title}">${title}</option>`;
      }

      // Set style change callback
      style_switcher.addEventListener('change', () => {
        this.setStyle(style_switcher.value);
      });
    }
  }

  protected setStyle(style: string) {
    const head = qs('head');

    // If no <head> element, do nothing
    if (!head) {
      return;
    }

    const selected_style = qs('link[data-selected]') as HTMLElement;

    if (selected_style) {
      // If style already selected, do nothing
      if (selected_style.title === style) {
        return;
      }

      // Remove previously selected style from <head>
      selected_style.remove();
    }

    // Add currently selected style to <head>
    const url = this.styles[style];
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    link.setAttribute('data-selected', 'true');

    link.addEventListener('load', () => {
      this.manager.emit('style loaded');
    });

    head.appendChild(link);

    // Save selected style
    const expiration_date = new Date();
    expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
    Cookie.set('tinyib_style', style, expiration_date);

    this.manager.emit('style changed');
  }
}
