import { WatchModel } from "./watchModel";
import { WatchView } from "./watchView";

export class WatchModeController {
  private model: WatchModel;
  private view: WatchView;
  private currentMode: number;

  constructor(model: WatchModel, view: WatchView) {
    this.model = model;
    this.view = view;
    this.currentMode = 0;
  }

  changeMode(): void {
    this.currentMode = (this.currentMode + 1) % 3;
    this.updateBlinking();
  }

  public getCurrentMode(): number {
    return this.currentMode;
  }

  private updateBlinking(): void {
    if (this.currentMode === 1) {
      this.view.blink("hours");
    } else if (this.currentMode === 2) {
      this.view.blink("hours");
      this.view.blink("minutes");
    } else {
      this.view.blink("hours");
      this.view.blink("minutes");
    }
  }
}
