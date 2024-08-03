import { WatchModel } from "./watchModel";

export class WatchView {
  private model: WatchModel;
  private lightOn: boolean;

  constructor(model: WatchModel) {
    this.model = model;
    this.lightOn = false;
  }

  displayTime(): void {
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.textContent = this.model.getTime();
    }
  }

  toggleLight(): void {
    this.lightOn = !this.lightOn;
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.style.backgroundColor = this.lightOn ? "#FBE106" : "#FFFFFF";
    }
  }

  blink(part: string): void {
    const partDisplay = document.getElementById(`${part}Display`);
    if (partDisplay) {
      partDisplay.classList.toggle("blink");
    }
  }
}
