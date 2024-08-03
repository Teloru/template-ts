import "./index.css";
import {
  WatchModel,
  WatchView,
  WatchModeController,
  WatchTimeController,
  WatchIncreaseTimeController,
} from "./watch";

const model = new WatchModel();
const view = new WatchView(model);
const modeController = new WatchModeController(model, view);
const timeController = new WatchTimeController(model, view);
const increaseTimeController = new WatchIncreaseTimeController(
  model,
  view,
  modeController
);

document
  .getElementById("modeButton")
  .addEventListener("click", () => modeController.changeMode());
document
  .getElementById("increaseButton")
  .addEventListener("click", () => increaseTimeController.increaseTime());
document
  .getElementById("lightButton")
  .addEventListener("click", () => view.toggleLight());

timeController.startClock();
view.displayTime();
