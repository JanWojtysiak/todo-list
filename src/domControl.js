export class DomController {
  constructor(selectors = {}) {
    this.elements = {};
    this.selectors = this.selectors;
  }
  loadElements() {
    Object.keys(this.selectors).forEach((key) => {
      const selector = this.selectors[key];

      if (selector.startsWith("all:")) {
        this.elements[key] = document.querySelectorAll(selector.slice(4));
      } else {
        this.elements[key] = document.querySelector(selector);

        if (!this.elements[key]) {
          console.warn(`Element ${key} (${selector}) not found`);
        }
      }
    });
  }
}
