import { createProject } from "./projectCreator";

export default class ProjectManager {
  constructor(projectFactory = createProject) {
    if (typeof projectFactory !== "function") {
      throw new Error("Argument must be a function");
    }
    this.projects = {};
    this.projectFactory = projectFactory;
  }
  addProject(name) {
    if (this.projects[name]) {
      throw new Error("Project with that name exists");
    }
    this.projects[name] = this.projectFactory(name);
  }
  removeProject(name) {
    if (!this.projects[name]) {
      throw new Error("There is no project with that name");
    }
    delete this.projects[name];
  }
  renameProject(name, wantedName) {
    if (this.projects[name]) {
      this.projects[wantedName] = this.projects[name]; // Copy to new name
      delete this.projects[name]; // Remove old entry
    }
  }
  viewTodos(name) {
    if (!this.projects[name]) {
      throw new Error(`Project ${name} not found`);
    }
    const array = this.projects[name].todos;
    const titles = array.map((todo) => todo.title);
    return titles;
  }
}
