export class AppController {
  constructor(projectManager, uiBuilder, domManager) {
    this.projectManager = projectManager;
    this.uiBuilder = uiBuilder;
    this.domManager = domManager;
  }

  init() {
    const formWrapper = document.querySelector(".form-container");
    const navWrapper = document.querySelector("nav");

    const form = formWrapper.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        this._handleProjectSubmit(e);
      });
    }
    if (navWrapper) {
      navWrapper.addEventListener("click", (e) => {
        this._handleProjectOpen(e);
      });
    }
  }

  _handleProjectSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.projectName;
    const value = input.value.trim();

    if (!value) {
      alert("Enter something!");
      return;
    }

    console.log("Sent:", value);
    this.projectManager.addProject(value);

    const newProjectButton = this.uiBuilder.createProjectButton(value);
    this.domManager.render("main", newProjectButton);

    input.value = "";
  }
  _handleProjectOpen(event) {
    const project = event.target;
  }
}
