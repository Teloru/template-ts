/**
 * WatchController.ts
 */
import { ModeEnum } from "../mode";
import { WatchModel } from "../watchModel";
import { WatchView } from "../view/watchView";
import { DigitalWatchView } from "../view/digitalWatchView";
import { AnalogWatchView } from "../view/analogWatchView";

enum WatchTypeEnum {
  "DIGITAL" = "DIGITAL",
  "ANALOG" = "ANALOG",
}

export class WatchController {
  private _model: WatchModel;
  private _currentWatchType: WatchTypeEnum;
  private _view: WatchView;

  constructor() {
    const currentDate = new Date();
    this._model = new WatchModel(
      currentDate.getUTCHours(),
      currentDate.getUTCMinutes(),
      currentDate.getUTCSeconds(),
      0 - currentDate.getTimezoneOffset() / 60
    );
    this._view = new DigitalWatchView();

    this._currentWatchType = WatchTypeEnum.DIGITAL;
    this._bindButtons();

    this._view.switchBtn.addEventListener("click", () => this.switchView());
  }
  private _bindButtons(): void {
    switch (this._currentWatchType) {
      case WatchTypeEnum.DIGITAL:
        this._view.buttons["modeBtn"].addEventListener("click", () =>
          this.switchMode()
        );
        this._view.buttons["lightBtn"].addEventListener("click", () =>
          this.toggleLight()
        );
        this._view.buttons["increaseBtn"].addEventListener("click", () =>
          this.increaseButtonPressed()
        );
        break;
      case WatchTypeEnum.ANALOG:
        break;
    }
  }

  private _updateView(): void {
    switch (this._currentWatchType) {
      case WatchTypeEnum.DIGITAL:
        this._view.printView(
          this._model.time,
          this._model.currentMode,
          this._model.isLightOn
        );
        break;
      case WatchTypeEnum.ANALOG:
        this._view.printView(this._model.time, this._model.currentMode);
        break;
    }
  }

  private _addSecond(): void {
    let newSeconds = (this._model.utcSeconds + 1) % 60;
    if (newSeconds === 0) this._addMinute(true);
    this._model.utcSeconds = newSeconds;
    this._updateView();
  }

  private _addMinute(incrementHour: boolean): void {
    let newMinute = (this._model?.utcMinutes + 1) % 60;
    if (newMinute === 0 && incrementHour) this._addHour(); // should increase hours when max minutes reached
    this._model.utcMinutes = newMinute;
    this._updateView();
  }

  private _addHour(): void {
    this._model.utcHours = (this._model.utcHours + 1) % 24;
    this._updateView();
  }

  public toggleLight(): void {
    this._model.isLightOn = !this._model.isLightOn;
    this._updateView();
  }

  private switchView(): void {
    switch (this._currentWatchType) {
      case WatchTypeEnum.DIGITAL: {
        this._view.watchAndButtons.remove();
        this._view = new AnalogWatchView();
        this._view.printView(this._model.time, this._model.currentMode);
        this._currentWatchType = WatchTypeEnum.ANALOG;
        break;
      }
      case WatchTypeEnum.ANALOG: {
        this._view.watchAndButtons.remove();
        this._view = new DigitalWatchView();
        this._view.printView(
          this._model.time,
          this._model.currentMode,
          this._model.isLightOn
        );
        this._currentWatchType = WatchTypeEnum.DIGITAL;
        break;
      }
    }
    this._bindButtons();
  }

  public switchMode(): void {
    switch (this._model.currentMode) {
      case ModeEnum.READ_ONLY:
        this._model.currentMode = ModeEnum.HOURS_EDITION;
        break;
      case ModeEnum.HOURS_EDITION:
        this._model.currentMode = ModeEnum.MINUTES_EDITION;
        break;
      case ModeEnum.MINUTES_EDITION:
        this._model.currentMode = ModeEnum.READ_ONLY;
        break;
    }
    this._updateView();
  }

  public increaseButtonPressed(): void {
    switch (this._model.currentMode) {
      case ModeEnum.HOURS_EDITION:
        return this._addHour();
      case ModeEnum.MINUTES_EDITION:
        return this._addMinute(false);
      case ModeEnum.READ_ONLY:
      default:
        return;
    }
  }

  public startWatch(): void {
    this._updateView();
    window.setInterval(() => this._addSecond(), 1000);
  }
}
