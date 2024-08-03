/**
 * watchIncreaseTimeController.ts
 */
import { WatchModel } from "./watchModel";
import { WatchView } from "./watchView";
import { WatchModeController } from "./watchModeController";

export class WatchIncreaseTimeController {
  private model: WatchModel;
  private view: WatchView;
  private modeController: WatchModeController;

  constructor(
    model: WatchModel,
    view: WatchView,
    modeController: WatchModeController
  ) {
    this.model = model;
    this.view = view;
    this.modeController = modeController;
  }

  increaseTime(): void {
    if (!this.modeController.isEditing()) {
      console.log("Cannot increase time: you are not in editing mode.");
      return;
    }

    const mode = this.modeController.getCurrentMode();
    if (mode === 1) {
      this.model.setMinutes((this.model.getMinutes() + 1) % 60);
    } else if (mode === 2) {
      this.model.setHours((this.model.getHours() + 1) % 24);
    } else if (mode === 3) {
      this.model.setSeconds((this.model.getSeconds() + 1) % 60);
    }

    this.view.displayTime();
  }
}
