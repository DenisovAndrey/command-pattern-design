import {Directions} from "../../../types/types";
import {getNextDirection, getPrevDirection} from "../../../helpers/directions";
import {Movable} from "../../../types/abstractions/Movable";

export class Robot implements Movable{
  private _bearing: Directions;
  private _coordinateX: number;
  private _coordinateY: number;

  constructor(coordinateX: number = 0, coordinateY: number = 0, bearing: Directions = Directions.north) {
    this._bearing = bearing;
    this._coordinateX = coordinateX;
    this._coordinateY = coordinateY;
  }

  get bearing(): Directions {
    return this._bearing;
  }

  get coordinates(): [number, number]{
    return [this._coordinateX, this._coordinateY]
  }

  turnRight(): void {
    const nextDirection: Directions = getNextDirection(this._bearing)
    this._bearing = nextDirection;
  }

  turnLeft(): void {
    const prevDirection: Directions = getPrevDirection(this._bearing)
    this._bearing = prevDirection;
  }

  advance(): void {
    if (this._bearing === Directions.north) {
      this._coordinateY++;
    } else if (this._bearing === Directions.east) {
      this._coordinateX++;
    } else if (this._bearing === Directions.south) {
      this._coordinateY--;
    } else if (this._bearing === Directions.west) {
      this._coordinateX--;
    }
  }
}
