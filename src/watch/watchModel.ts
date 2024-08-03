/**
 * WatchModel.ts
 */
import { ModeEnum } from "./mode";
import { Time } from "./time";

export class WatchModel {
  private _time: Time;
  private _isLightOn: boolean;
  private _currentMode: ModeEnum;

  constructor(hours: number, minutes: number, seconds: number, tz: number) {
    this._time = new Time(hours, minutes, seconds, tz);
    this._isLightOn = false;
    this._currentMode = ModeEnum.READ_ONLY;
  }

  public get utcHours() {
    return this._time.utcHours;
  }
  public set utcHours(hours: number) {
    this._time.utcHours = hours;
  }

  public get utcMinutes() {
    return this._time.utcMinutes;
  }
  public set utcMinutes(minutes: number) {
    this._time.utcMinutes = minutes;
  }

  public get utcSeconds() {
    return this._time.utcSeconds;
  }
  public set utcSeconds(seconds: number) {
    this._time.utcSeconds = seconds;
  }

  public get timeZone() {
    return this._time.timeZone;
  }
  public set timeZone(tz: number) {
    this._time.timeZone = tz;
  }

  public get time() {
    return this._time;
  }

  public get isLightOn() {
    return this._isLightOn;
  }
  public set isLightOn(light: boolean) {
    this._isLightOn = light;
  }

  public get currentMode() {
    return this._currentMode;
  }
  public set currentMode(mode: ModeEnum) {
    this._currentMode = mode;
  }
}
