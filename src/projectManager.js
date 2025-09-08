import { createProject } from "./projectCreator";

export default class ProjectManager {
  constructor(projectFactory = createProject) {
    if (typeof projectFactory !== "function") {
      throw new Error("projectFactory must be a function");
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
}
