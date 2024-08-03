/**
 * watchView.ts
 */
import { WatchModel } from "./watchModel";

export class WatchView {
  private model: WatchModel;
  private lightOn: boolean;

  private hoursElement: HTMLElement;
  private minutesElement: HTMLElement;
  private secondsElement: HTMLElement;

  constructor(model: WatchModel) {
    this.model = model;
    this.lightOn = false;

    this.hoursElement = document.getElementById("hoursDisplay")!;
    this.minutesElement = document.getElementById("minutesDisplay")!;
    this.secondsElement = document.getElementById("secondsDisplay")!;
  }

  displayTime(): void {
    const hoursDisplay = document.getElementById("hoursDisplay");
    const minutesDisplay = document.getElementById("minutesDisplay");
    const secondsDisplay = document.getElementById("secondsDisplay");

    if (hoursDisplay && minutesDisplay && secondsDisplay) {
      const time = this.model.getTime();
      const [hours, minutes, seconds] = time.split(":");

      // Update each segment individually
      hoursDisplay.textContent = hours;
      minutesDisplay.textContent = minutes;
      secondsDisplay.textContent = seconds;
    }
  }

  toggleLight(): void {
    this.lightOn = !this.lightOn;
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.style.backgroundColor = this.lightOn ? "#FBE106" : "#FFFFFF";
    }
  }

  public blink(component: string): void {
    if (component === "hours") {
      this.hoursElement.classList.add("blink");
    } else if (component === "minutes") {
      this.minutesElement.classList.add("blink");
    } else if (component === "seconds") {
      this.secondsElement.classList.add("blink");
    }
  }

  public removeBlink(component: string): void {
    if (component === "hours") {
      this.hoursElement.classList.remove("blink");
    } else if (component === "minutes") {
      this.minutesElement.classList.remove("blink");
    } else if (component === "seconds") {
      this.secondsElement.classList.remove("blink");
    }
  }
}
