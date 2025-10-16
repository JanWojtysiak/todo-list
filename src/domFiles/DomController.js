import { DomCreator } from "./DomCreator.js";

export class DomController {
  static domCreator = new DomCreator();

  constructor() {
    this.addListener();
  }

  addListener() {
    document.addEventListener("click", (e) => {
      if (
        e.target.matches("#create-project") &&
        !e.target.classList.contains("locked")
      ) {
        e.target.classList.add("locked");
        DomController.domCreator.createForm();
      } else if (e.target.classList.contains("project")) {
        DomController.domCreator.viewProject();
      }
    });
  }
}
