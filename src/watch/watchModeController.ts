/**
 * watchModeController.ts
 */
import { WatchModel } from "./watchModel";
import { WatchView } from "./watchView";

export class WatchModeController {
  private model: WatchModel;
  private view: WatchView;
  private currentMode: number; // 0 = Default (view-only), 1 = Editing minutes, 2 = Editing hours, 3 = Editing seconds

  constructor(model: WatchModel, view: WatchView) {
    this.model = model;
    this.view = view;
    this.currentMode = 0; // Start in default view mode
  }

  changeMode(): void {
    this.currentMode = (this.currentMode + 1) % 4; // There are now 4 modes: default, editing seconds, editing minutes, editing hours
    this.updateBlinking();
  }

  public getCurrentMode(): number {
    return this.currentMode;
  }

  public isEditing(): boolean {
    return this.currentMode > 0; // Editing minutes, hours, or seconds
  }

  private updateBlinking(): void {
    console.log("updateBlinking : " + this.currentMode);

    // Reset all blinking effects
    this.view.removeBlink("hours");
    this.view.removeBlink("minutes");
    this.view.removeBlink("seconds");

    // Apply blinking based on current mode
    if (this.currentMode === 1) {
      this.view.blink("minutes");
    } else if (this.currentMode === 2) {
      this.view.blink("hours");
    } else if (this.currentMode === 3) {
      this.view.blink("seconds");
    }
    // No blinking in default view mode (0)
  }
}
