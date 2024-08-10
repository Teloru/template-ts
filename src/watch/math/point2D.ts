export class Point2D {
  constructor(public x: number, public y: number) {}

  public toArray(): [number, number] {
    return [this.x, this.y];
  }

  public toCSS(): string {
    return `translate(${this.x}px, ${this.y}px)`;
  }
}
