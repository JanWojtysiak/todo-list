export class ElementFactory {
  createInput(type = "text", className = "", name = "") {
    const input = document.createElement("input");
    input.type = type;
    if (className) input.className = className;
    if (name) input.name = name;
    return input;
  }

  createButton(text, className = "", id = "", type = "button") {
    const button = document.createElement("button");
    button.type = type;
    button.textContent = text;
    if (className) button.className = className;
    if (id) button.id = id;
    return button;
  }

  createForm(className = "", id = "") {
    const form = document.createElement("form");
    if (className) form.className = className;
    if (id) form.id = id;
    return form;
  }

  createDiv(className = "", id = "") {
    const div = document.createElement("div");
    if (className) div.className = className;
    if (id) div.id = id;
    return div;
  }
}
export class ProjectUIBuilder {
  constructor(factory) {
    // This class gets the factory from the outside instead of creating it.
    // This is a good practice called Dependency Injection.
    this.factory = factory;
  }

  createCloseButton() {
    return this.factory.createButton("X", "closeBtn", "", "");
  }
  createProjectDiv(name) {
    const projectDiv = this.factory.createDiv("projectDiv");
    projectDiv.textContent = name;
    return projectDiv;
  }
  createProjectButton(title) {
    return this.factory.createButton(title, "button-style project", title);
  }

  createTodoList() {
    const form = this.factory.createForm("todo-form");
  }
}
