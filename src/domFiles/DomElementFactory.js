export class DomElementFactory {
  createInput(type, className, name) {
    const input = document.createElement("input");
    input.type = type;
    input.className = className;
    input.name = name;
    return input;
  }

  createButton(text, className = "", id = "") {
    const button = document.createElement("button");
    Object.assign(button, {
      type: "button",
      textContent: text,
      className,
      ...(id && { id }),
    });
    return button;
  }
  createForm(className) {
    const form = document.createElement("form");
    form.className = className;
    return form;
  }
}
