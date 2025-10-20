export class DomManager {
    // A general method to render any element inside a specific parent
    render(parentSelector, element) {
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(element);
        }
        else {
            console.error(`Parent element with selector "${parentSelector}" not found.`);
        }
    }
    // A method to get a value from an input
  getElementValue(selector) {
    const element = document.querySelector(selector);
    return element ? element.value : null;
  }
}