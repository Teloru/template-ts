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
    if (this.modeController.getCurrentMode() === 1) {
      this.model.setHours((this.model.getHours() + 1) % 24);
    } else if (this.modeController.getCurrentMode() === 2) {
      this.model.setMinutes((this.model.getMinutes() + 1) % 60);
    }
    this.view.displayTime();
  }
}
