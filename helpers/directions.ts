import {Directions} from "../types/types";

const directions: Directions[] = Object.values(Directions);

export const getNextDirection = (currentDirection: Directions): Directions => {
  const currentDirectionIndex = directions.indexOf(currentDirection);
  const nextDirectionIndex = currentDirectionIndex + 1 === directions.length ? 0 : currentDirectionIndex + 1;
  return directions[nextDirectionIndex]
}
export const getPrevDirection = (currentDirection: Directions): Directions => {
  const currentDirectionIndex = directions.indexOf(currentDirection);
  const prevDirectionIndex = currentDirectionIndex - 1 >= 0 ? currentDirectionIndex - 1 : directions.length - 1;
  return directions[prevDirectionIndex]
}

// TODO: cover via unit tests
