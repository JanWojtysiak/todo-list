import { ProjectManager } from "../projectScripts/projectManager.js";

export class DomCreator {
  createInput = () => {
    const input = document.createElement("input");
    Object.assign(input, {
      type: "text",
      className: "styled-input",
      name: "projectName",
    });
    return input;
  };

  createSubmitButton = () => {
    const button = document.createElement("button");
    Object.assign(button, {
      type: "submit",
      textContent: "Create Project",
      className: "submit-btn",
    });
    return button;
  };

  createProjectButton = (title) => {
    const button = document.createElement("button");
    Object.assign(button, {
      className: "button-style",
      textContent: title,
    });

    document.querySelector("main")?.appendChild(button);
  };

  createForm = () => {
    const container = document.querySelector("#container");
    if (!container) return;

    const formElements = (() => {
      const wrapper = document.createElement("div");
      const form = document.createElement("form");
      const input = this.createInput();
      const submitBtn = this.createSubmitButton();

      wrapper.className = "form-container";
      form.className = "styled-form";

      form.append(input, submitBtn);
      wrapper.appendChild(form);

      return { wrapper, form, input };
    })();

    container.appendChild(formElements.wrapper);

    formElements.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const value = formElements.input.value.trim();
      if (!value) {
        alert("Enter something!");
        return;
      }
      const project = new ProjectManager();
      console.log("Sent:", value);
      project.addProject(value);
      this.createProjectButton(value);
      formElements.input.value = "";
    });
  };
}
