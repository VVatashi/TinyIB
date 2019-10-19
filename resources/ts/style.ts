import { Cookie } from './utils';

const COOKIE_KEY = 'style';
const COOKIE_TTL = 365 * 24 * 60 * 60 * 1000;
const DEFAULT_STYLE = 'Synthwave';

const styles = new Set([
  '2watch',
  'Futaba',
  'Lime',
  'Nocturnal',
  'Photon',
  'Quartz',
  'Synthwave',
]);

export class Style {
  public static list(): Set<string> {
    return styles;
  }

  public static get(): string {
    return Cookie.get(COOKIE_KEY, DEFAULT_STYLE);
  }

  public static set(style: string) {
    const existingLink = document.getElementById('selected-style');

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.id = 'selected-style';
    link.href = `${window.contentUrl}/css/${style.toLowerCase()}.css`;
    document.head.appendChild(link);

    // Wait to avoid the flash of unstyled content.
    setTimeout(() => {
      if (existingLink) {
        existingLink.remove();
      }
    }, 50);

    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + COOKIE_TTL);
    Cookie.set(COOKIE_KEY, style, expireDate);

    window.dataLayer.push({ theme: style });
  }
}

export default Style;
