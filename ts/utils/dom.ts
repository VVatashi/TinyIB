export class DOM {
  public static qid(id: string) {
    return document.getElementById(id);
  }

  public static qs(selector: string, context: Element | Document = null) {
    if (!context) {
      context = document;
    }

    return context.querySelector(selector);
  }

  public static qsa(selector: string, context: Element | Document = null) {
    if (!context) {
      context = document;
    }

    const elementList = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elementList) as Element[];
  }
}
