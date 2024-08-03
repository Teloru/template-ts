/**
 * watchTimeController.ts
 */
import { WatchModel } from "./watchModel";
import { WatchView } from "./watchView";

export class WatchTimeController {
  private model: WatchModel;
  private view: WatchView;

  constructor(model: WatchModel, view: WatchView) {
    this.model = model;
    this.view = view;
  }

  startClock(): void {
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    this.model.incrementSeconds();
    this.view.displayTime();
  }
}
