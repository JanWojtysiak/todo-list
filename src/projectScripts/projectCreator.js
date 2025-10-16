export function createProject(name) {
  if (name.length >= 7) {
    throw new Error("Project name is too long!");
  }
  return {
    name,
    todos: [],
  };
}
