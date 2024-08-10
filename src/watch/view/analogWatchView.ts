/**
 * AnalogWatchView.ts
 */
import { WatchView } from "./watchView";
import { ModeEnum } from "../mode";
import { Time } from "../time";
import { Matrix } from "../math/matrix";

export class AnalogWatchView extends WatchView {
  constructor() {
    super();
  }

  public initView() {
    super.initView();

    let i = 1;
    while (i <= 12) {
      const hourTick = document.createElement("span");
      hourTick.className = "hourTick";
      hourTick.style.setProperty("--rotation", `${i * 30}deg`);
      hourTick.style.setProperty("--tickHeight", i % 3 == 0 ? "35px" : "20px");
      this._watchElem.appendChild(hourTick);
      i++;
    }

    // hands
    const hourHand = document.createElement("div");
    hourHand.className = "hand hour-hand";
    const minuteHand = document.createElement("div");
    minuteHand.className = "hand minute-hand";
    const secondHand = document.createElement("div");
    secondHand.className = "hand second-hand";

    this._watchElem.appendChild(hourHand);
    this._watchElem.appendChild(minuteHand);
    this._watchElem.appendChild(secondHand);
  }

  public printView(time: Time, currentMode: ModeEnum): void {
    // computing degrees for each handle
    const hours = (time.utcHours + time.timeZone) % 12;
    const minutes = time.utcMinutes;
    const seconds = time.utcSeconds;

    const hourAngle = hours * 30 + minutes * 0.5; // 30°/hour + 0.5°/minute
    const minuteAngle = minutes * 6; // 6°/minute
    const secondAngle = seconds * 6; // 6°/seconde

    const hourMatrix = Matrix.rotation((hourAngle * Math.PI) / 180);
    const minuteMatrix = Matrix.rotation((minuteAngle * Math.PI) / 180);
    const secondMatrix = Matrix.rotation((secondAngle * Math.PI) / 180);

    const hourHand = this._watchElem.querySelector(".hour-hand") as HTMLElement;
    const minuteHand = this._watchElem.querySelector(
      ".minute-hand"
    ) as HTMLElement;
    const secondHand = this._watchElem.querySelector(
      ".second-hand"
    ) as HTMLElement;

    // applying transformations
    if (hourHand) {
      hourHand.style.transform = this.matrixToCSS(hourMatrix);
    }
    if (minuteHand) {
      minuteHand.style.transform = this.matrixToCSS(minuteMatrix);
    }
    if (secondHand) {
      secondHand.style.transform = this.matrixToCSS(secondMatrix);
    }
  }

  private matrixToCSS(matrix: Matrix): string {
    const m = matrix["matrix"];
    return `matrix(${m[0][0]}, ${m[1][0]}, ${m[0][1]}, ${m[1][1]}, ${m[0][2]}, ${m[1][2]})`;
  }
}
