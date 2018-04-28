export function qid(id: string) {
  return document.getElementById(id);
}

export function qs(selector: string, context: Element|Document = document) {
  return context.querySelector(selector);
}

export function qsa(selector: string, context: Element|Document = document) {
  return context.querySelectorAll(selector);
}
