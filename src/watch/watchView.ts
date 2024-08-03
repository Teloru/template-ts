/**
 * WatchView.ts
 */
import { ModeEnum } from "./mode";
import { Time } from "./time";

export class WatchView {
  private _watchElem: HTMLElement;
  private _watchScreen: HTMLElement;
  private _modeBtn: HTMLElement;
  private _lightBtn: HTMLElement;
  private _increaseBtn: HTMLElement;

  constructor() {
    this._watchElem = document.createElement("div");
    this._watchElem.className = "watchContainer";

    this._watchScreen = document.createElement("div");
    this._watchScreen.className = "timeDisplay";

    this._modeBtn = document.createElement("button");
    this._modeBtn.className = "modeButton";
    this._modeBtn.append("mode");

    this._lightBtn = document.createElement("button");
    this._lightBtn.className = "lightButton";
    this._lightBtn.append("light");

    this._increaseBtn = document.createElement("button");
    this._increaseBtn.className = "increaseButton";
    this._increaseBtn.append("increase");

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "buttons";
    buttonContainer.append(this._modeBtn, this._lightBtn, this._increaseBtn);

    this._watchElem.appendChild(this._watchScreen);

    document.getElementById("app")?.append(this._watchElem, buttonContainer);
  }

  public get modeBtn() {
    return this._modeBtn;
  }
  public get lightBtn() {
    return this._lightBtn;
  }
  public get increaseBtn() {
    return this._increaseBtn;
  }

  public printView(time: Time, light: boolean, currentMode: ModeEnum): void {
    const hours = document.createElement("span");
    hours.className = `${
      currentMode == ModeEnum.HOURS_EDITION ? "hours blink" : "hours"
    }`;
    hours.append(time.formattedHours);
    const minutes = document.createElement("span");
    minutes.className = `${
      currentMode == ModeEnum.MINUTES_EDITION ? "minutes blink" : "minutes"
    }`;
    minutes.append(time.formattedMinutes);
    const seconds = document.createElement("span");
    seconds.append(time.formattedSeconds);

    const timeElem = document.createElement("span");
    timeElem.append(hours, ":", minutes, ":", seconds);
    this._watchScreen.innerHTML = timeElem.innerHTML;

    if (light) this._watchScreen.classList.add("light");
    else this._watchScreen.classList.remove("light");
  }
}
