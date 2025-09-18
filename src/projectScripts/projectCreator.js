export function createProject(name) {
  if (this.name.length >= 7) {
    throw new Error("Project name is too long!");
  }
  return {
    name,
    todos: [],
  };
}
