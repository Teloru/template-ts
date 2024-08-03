/**
 * watchModeController.ts
 */
import { WatchModel } from "./watchModel";
import { WatchView } from "./watchView";

export class WatchModeController {
  private model: WatchModel;
  private view: WatchView;
  private currentMode: number; // 0 = Default (view-only), 1 = Editing hours, 2 = Editing minutes, 3 = No editing

  constructor(model: WatchModel, view: WatchView) {
    this.model = model;
    this.view = view;
    this.currentMode = 0; // Start in default view mode
  }

  changeMode(): void {
    this.currentMode = (this.currentMode + 1) % 3; // There are now 3 modes: editing hours, editing minutes, no editing
    this.updateBlinking();
  }

  public getCurrentMode(): number {
    return this.currentMode;
  }

  public isEditing(): boolean {
    return this.currentMode === 1 || this.currentMode === 2; // Editing hours or minutes
  }

  private updateBlinking(): void {
    console.log("updateBlinking : " + this.currentMode);

    // Reset all blinking effects
    this.view.removeBlink("hours");
    this.view.removeBlink("minutes");
    this.view.removeBlink("seconds");

    // Apply blinking based on current mode
    if (this.currentMode === 1) {
      this.view.blink("hours");
    } else if (this.currentMode === 2) {
      this.view.blink("minutes");
    }
    // No blinking in default view mode (0) or no editing mode (3)
  }
}
