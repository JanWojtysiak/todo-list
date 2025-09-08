import { isDate, format } from "date-fns";
export default class TodoValidator {
  constructor(todo) {
    this.todo = todo;
  }

  isValidTitle() {
    if (!this.todo.title || this.todo.title.length === 0) {
      return { valid: false, error: "Title is required" };
    }
    if (this.todo.title.length >= 10) {
      return { valid: false, error: "Title is too long" };
    }
    return { valid: true };
  }

  isValidDescription() {
    if (this.todo.description.length >= 100) {
      return { valid: false, error: "Description is too long" };
    }
    return { valid: true };
  }

  isValidDate() {
    if (isDate(this.todo.date)) {
      return { valid: true };
    }
    return { valid: false, error: "Incorrect date" };
  }

  isValidPriority() {
    if (!this.todo.priority || this.todo.priority.length === 0) {
      return { valid: false, error: "Priority is required" };
    }
    return { valid: true };
  }
}
