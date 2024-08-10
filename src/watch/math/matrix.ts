import { Point2D } from "./point2D";

export class Matrix {
  private matrix: number[][];

  constructor(matrix?: number[][]) {
    this.matrix = matrix || [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
  }

  public static identity(): Matrix {
    return new Matrix();
  }

  public multiply(other: Matrix): Matrix {
    const result = new Matrix([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          result.matrix[i][j] += this.matrix[i][k] * other.matrix[k][j];
        }
      }
    }

    return result;
  }

  public transformPoint(point: Point2D): Point2D {
    const [x, y] = point.toArray();
    const newX =
      this.matrix[0][0] * x + this.matrix[0][1] * y + this.matrix[0][2];
    const newY =
      this.matrix[1][0] * x + this.matrix[1][1] * y + this.matrix[1][2];

    return new Point2D(newX, newY);
  }

  public static translation(tx: number, ty: number): Matrix {
    return new Matrix([
      [1, 0, tx],
      [0, 1, ty],
      [0, 0, 1],
    ]);
  }

  public static rotation(angle: number): Matrix {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return new Matrix([
      [cos, -sin, 0],
      [sin, cos, 0],
      [0, 0, 1],
    ]);
  }

  public static scale(sx: number, sy: number): Matrix {
    return new Matrix([
      [sx, 0, 0],
      [0, sy, 0],
      [0, 0, 1],
    ]);
  }
}
