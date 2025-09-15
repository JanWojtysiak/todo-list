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
      throw new Error(`Project '${name}' already exists`);
    }
    this.projects[name] = this.projectFactory(name);
  }

  removeProject(name) {
    if (!this.projects[name]) {
      throw new Error(`Project '${name}' not found`);
    }
    delete this.projects[name];
  }

  renameProject(name, wantedName) {
    if (!this.projects[name]) {
      throw new Error(`Project '${name}' not found`);
    }
    if (this.projects[wantedName]) {
      throw new Error(`Project '${wantedName}' already exists`);
    }
    this.projects[wantedName] = this.projects[name];
    delete this.projects[name];
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
