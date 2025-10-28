export class AppController {
  constructor(projectManager, uiBuilder, domManager, todoCreator) {
    this.projectManager = projectManager;
    this.uiBuilder = uiBuilder;
    this.domManager = domManager;
    this.todoCreator = todoCreator;
  }

  init() {
    const createProjectForm = document.getElementById("create-project-form");
    const todoForm = document.getElementById("create-todo-form");
    const navWrapper = document.querySelector("nav");
    if (createProjectForm) {
      createProjectForm.addEventListener("submit", (e) => {
        this._handleProjectSubmit(e);
      });
    }

    if (todoForm) {
      todoForm.addEventListener("submit", (e) => {
        this._handleTodoSubmit(e);
      });
    }
    if (navWrapper) {
      navWrapper.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("project")) {
          this._handleProjectOpen(e);
        }
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

    this.projectManager.addProject(value);
    const newProjectButton = this.uiBuilder.createProjectButton(value);
    this.domManager.render("nav", newProjectButton);

    console.log("Project Sent:", value);
    input.value = "";
  }
  _handleTodoSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const date = document.getElementById("todo-date").value;
    const priority = document.getElementById("todo-priority").value;
    this.todoCreator(title, description, date, priority);
    event.target.reset();
  }
  _handleProjectOpen(event) {
    event.preventDefault();
    const projectReference = event.target;
    const projectId = projectReference.id;
    const projectDiv = this.uiBuilder.createProjectDiv(projectId);
    this.domManager.render("#projects-tab", projectDiv);
  }
}
