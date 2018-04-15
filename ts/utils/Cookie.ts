export function get(name: string, _default: string = null) {
  const cookie_str = `; ${document.cookie}`;
  const cookie_parts = cookie_str.split(`; ${name}=`);

  if (cookie_parts.length === 2) {
    const value_enc = cookie_parts.pop().split(';').shift();
    return decodeURIComponent(value_enc);
  }

  return _default;
}

export function set(name: string, value: string, expiration: Date) {
  const value_enc = encodeURIComponent(value);
  const expiration_str = expiration.toUTCString();
  document.cookie = `${name}=${value_enc}; path=/; expires=${expiration_str}`;
}
