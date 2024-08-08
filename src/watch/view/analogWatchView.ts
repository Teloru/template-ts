/**
 * AnalogWatchView.ts
 */

import { WatchView } from "./watchView";
import { ModeEnum } from "../mode";
import { Time } from "../time";

export class AnalogWatchView extends WatchView {
  constructor() {
    super();
  }

  public printView(time: Time, currentMode: ModeEnum): void {
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
  }
}
