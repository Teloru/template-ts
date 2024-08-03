export class WatchModel {
  private hours: number;
  private minutes: number;
  private seconds: number;

  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  getTime(): string {
    return `${this.formatTime(this.hours)}:${this.formatTime(
      this.minutes
    )}:${this.formatTime(this.seconds)}`;
  }

  getHours(): number {
    return this.hours;
  }

  getMinutes(): number {
    return this.minutes;
  }

  getSeconds(): number {
    return this.seconds;
  }

  setHours(hours: number): void {
    this.hours = hours % 24;
  }

  setMinutes(minutes: number): void {
    this.minutes = minutes % 60;
  }

  setSeconds(seconds: number): void {
    this.seconds = seconds % 60;
  }

  incrementSeconds(): void {
    this.seconds++;
    if (this.seconds > 59) {
      this.seconds = 0;
      this.incrementMinutes();
    }
  }

  private incrementMinutes(): void {
    this.minutes++;
    if (this.minutes > 59) {
      this.minutes = 0;
      this.incrementHours();
    }
  }

  private incrementHours(): void {
    this.hours++;
    if (this.hours > 23) {
      this.hours = 0;
    }
  }

  private formatTime(unit: number): string {
    return unit < 10 ? `0${unit}` : `${unit}`;
  }
}
