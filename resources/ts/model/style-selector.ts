import { EventEmitter, Cookie } from '../utils';

const styleCookieKey = 'style';
const styleCookieExpireIn = 365 * 24 * 60 * 60 * 1000;

export class StyleSelector extends EventEmitter {
  protected _style: string = null;

  get style() {
    return this._style;
  }

  set style(value: string) {
    this._style = value;

    // Save selected style to cookie.
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + styleCookieExpireIn);
    Cookie.set(styleCookieKey, value, expireDate);

    this.emit('style-changed', value);
  }

  constructor() {
    super();

    this.style = Cookie.get(styleCookieKey, 'Synthwave');
  }
}
