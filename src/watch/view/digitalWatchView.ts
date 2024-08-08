/**
 * DigitalWatchView.ts
 */

import { WatchView } from "./watchView";
import { ModeEnum } from "../mode";
import { Time } from "../time";

export class DigitalWatchView extends WatchView {
  constructor() {
    super();
  }

  public initView() {
    super.initView();

    const modeBtn = document.createElement("button");
    modeBtn.className = "modeButton";
    modeBtn.append("mode");

    const increaseBtn = document.createElement("button");
    increaseBtn.className = "increaseButton";
    increaseBtn.append("increase");

    const lightBtn = document.createElement("button");
    lightBtn.className = "lightButton";
    lightBtn.append("light");

    this._buttons = {
      modeBtn,
      lightBtn,
      increaseBtn,
    };
    this._buttonContainer.append(modeBtn, lightBtn, increaseBtn);
  }

  public printView(time: Time, currentMode: ModeEnum, light?: boolean): void {
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
