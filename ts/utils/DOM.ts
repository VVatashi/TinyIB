export function qid(id: string) {
  return document.getElementById(id);
}

export function qs(selector: string) {
  return document.querySelector(selector);
}

export function qsa(selector: string) {
  return document.querySelectorAll(selector);
}
