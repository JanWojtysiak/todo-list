import { ProjectManager } from "./projectScripts/projectManager.js";
import { ElementFactory } from "./domFiles/DomElementFactory.js";
import { ProjectUIBuilder } from "./domFiles/DomElementFactory.js";
import { DomManager } from "./domFiles/DomManager.js";
import { AppController } from "./domFiles/AppController.js";
import createTodo from "./todoScripts/todoCreator.js";
import "./templateStyles.css";
const projectManager = new ProjectManager();
const factory = new ElementFactory();
const domManager = new DomManager();
const uiBuilder = new ProjectUIBuilder(factory);
const app = new AppController(
  projectManager,
  uiBuilder,
  domManager,
  createTodo
);

app.init();
