import { DomCreator } from "./DomCreator.js";

export class DomController {
  constructor() {
    this.addListener();
  }

  addListener() {
    document.addEventListener("click", (e) => {
      if (e.target.matches("#create-project")) {
        const domCreator = new DomCreator();
        domCreator.createForm();
      }
    });
  }
}
