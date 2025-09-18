export default class TodoManager {
  constructor(todo) {
    this.todo = todo;
  }
  #title = this.todo.title;
  #priority = this.todo.priority;
  rename(name) {
    todo[this.#title] = name;
  }

  changePriority() {}
}
