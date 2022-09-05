import * as fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

const file: string = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const depths: number[][] = file
  .split("\n")
  .map((x) => x.split("").map((y) => parseInt(y.trim())));
console.log(depths);

const part1 = (depthMatrix: number[][]) => {
  let sum = 0;
  for (const [row, rowArray] of depthMatrix.entries()) {
    for (const [column, value] of rowArray.entries()) {
      let right = 9;
      let left = 9;
      let up = 9;
      let down = 9;
      try {
        right = rowArray[column + 1];
        right = right === undefined ? 9 : right;
      } catch {
        right = 9;
      }
      try {
        left = rowArray[column - 1];
        left = left === undefined ? 9 : left;
      } catch {
        left = 9;
      }
      try {
        up = depthMatrix[row - 1][column];
        up = up === undefined ? 9 : up;
      } catch {
        up = 9;
      }
      try {
        down = depthMatrix[row + 1][column];
        down = down === undefined ? 9 : down;
      } catch {
        down = 9;
      }
      console.log("value", value);

      console.log(8, up, 8);
      console.log(left, value, right);
      console.log(8, down, 8);

      if (value < up && value < down && value < left && value < right) {
        console.log("hit");

        console.log(value);
        sum += 1 + value;
      }
    }
  }
  return sum;
};
interface PointObject {
  x: number;
  y: number;
}
const Point = (x: number, y: number): PointObject => {
  return { x: x, y: y };
};
const point = Point(1, 1);

console.log(point);

const expand = (location: PointObject, depthMatrix: number[][]) => {
  let sum = 0;
  let points = [location];
  let expanded = true;
  let iterationPoints: PointObject[] = [];
  while (expanded) {
    expanded = false;
    for (const point of points) {
      const rowArray = depthMatrix[point.y];
      const row = point.y;
      const column = point.x;
      let right = 9;
      let left = 9;
      let up = 9;
      let down = 9;
      try {
        right = rowArray[column + 1];
        right = right === undefined ? 9 : right;
        if (right !== 9) {
          iterationPoints.push(Point(row, column + 1));
          expanded = true;
        }
      } catch {
        right = 9;
      }
      try {
        left = rowArray[column - 1];
        left = left === undefined ? 9 : left;
        if (left !== 9) {
          iterationPoints.push(Point(row, column - 1));
          expanded = true;
        }
      } catch {
        left = 9;
      }
      try {
        up = depthMatrix[row - 1][column];
        up = up === undefined ? 9 : up;
        if (up !== 9) {
          iterationPoints.push(Point(row - 1, column));
          expanded = true;
        }
      } catch {
        up = 9;
      }
      try {
        down = depthMatrix[row + 1][column];
        down = down === undefined ? 9 : down;
        if (down !== 9) {
          iterationPoints.push(Point(row + 1, column));
          expanded = true;
        }
      } catch {
        down = 9;
      }
      // console.log("value", value);

      // console.log(8, up, 8);
      // console.log(left, value, right);
      // console.log(8, down, 8);
    }
    points = iterationPoints;
    console.log(iterationPoints);
  }
  return sum;
};

console.log(part1(depths));
expand(Point(4, 4), depths);
