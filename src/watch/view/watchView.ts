/**
 * WatchView.ts
 */
import { ModeEnum } from "../utils/mode";
import { Time } from "../utils/time";

export class WatchView {
  protected _watchElem: HTMLElement;
  protected _watchScreen: HTMLElement;
  protected _buttonContainer: HTMLElement;
  protected _switchBtn: HTMLElement;
  protected _watchAndButtons: HTMLElement;
  protected _buttons: { [id: string]: HTMLElement };

  constructor() {
    this.initView();
  }

  public initView() {
    this._watchAndButtons = document.createElement("div");
    this._watchAndButtons.className = "watchAndButtons";

    this._watchElem = document.createElement("div");
    this._watchElem.className = "watchContainer";

    this._watchScreen = document.createElement("div");
    this._watchScreen.className = "timeDisplay digitalMode";

    this._buttonContainer = document.createElement("div");
    this._buttonContainer.className = "buttons";

    this._watchElem.appendChild(this._watchScreen);
    this._switchBtn = document.getElementById("switch");

    this._watchAndButtons.append(this._watchElem, this._buttonContainer);

    document.getElementById("app")?.append(this._watchAndButtons);
  }

  public get buttons() {
    return this._buttons;
  }

  public get watchAndButtons() {
    return this._watchAndButtons;
  }

  public get switchBtn() {
    return this._switchBtn;
  }

  public printView(time: Time, currentMode: ModeEnum, light?: boolean): void {}
}
