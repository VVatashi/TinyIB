export function qid(id: string) {
  return document.getElementById(id);
}

export function qs(selector: string, context: Element|Document = null) {
  if (!context) {
    context = document;
  }

  return context.querySelector(selector);
}

export function qsa(selector: string, context: Element|Document = null) {
  if (!context) {
    context = document;
  }

  const elementList = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elementList) as Element[];
}
