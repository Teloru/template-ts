export class Time {
  private _utcHours: number;
  private _utcMinutes: number;
  private _utcSeconds: number;
  private _timeZone: number;
  private _numberFormatter: Intl.NumberFormat;

  constructor(hours: number, minutes: number, seconds: number, tz: number) {
    this._utcHours = hours;
    this._utcMinutes = minutes;
    this._utcSeconds = seconds;
    this._timeZone = tz;
    this._numberFormatter = new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 2,
    });
  }

  get utcHours() {
    return this._utcHours;
  }
  set utcHours(hours: number) {
    if (hours < 0 || hours > 23) throw new Error("Invalid hours");
    this._utcHours = hours;
  }

  get utcMinutes() {
    return this._utcMinutes;
  }
  set utcMinutes(minutes: number) {
    if (minutes < 0 || minutes > 59) throw new Error("Invalid minutes");
    this._utcMinutes = minutes;
  }

  get utcSeconds() {
    return this._utcSeconds;
  }
  set utcSeconds(seconds: number) {
    if (seconds < 0 || seconds > 59) throw new Error("Invalid seconds");
    this._utcSeconds = seconds;
  }

  get timeZone() {
    return this._timeZone;
  }
  set timeZone(tz: number) {
    if (tz < -12 || tz > 12) throw new Error("Invalid time zone");
    this._timeZone = tz;
  }

  get formattedHours(): string {
    return this._numberFormatter.format((this._utcHours + this._timeZone) % 24);
  }
  get formattedMinutes(): string {
    return this._numberFormatter.format(this._utcMinutes);
  }
  get formattedSeconds(): string {
    return this._numberFormatter.format(this._utcSeconds);
  }
}
