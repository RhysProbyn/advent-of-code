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

interface PointObject {
  x: number;
  y: number;
}
const Point = (x: number, y: number): PointObject => {
  return { x: x, y: y };
};

const part1 = (depthMatrix: number[][]) => {
  let sum = 0;
  for (const [row, rowArray] of depthMatrix.entries()) {
    for (const [column, value] of rowArray.entries()) {
      let right = 9;
      let left = 9;
      let up = 9;
      let down = 9;
      if (!(column === rowArray.length - 1)) {
        right = rowArray[column + 1];
      }
      if (!(column === 0)) {
        left = rowArray[column - 1];
      }
      if (!(row === depthMatrix.length - 1)) {
        up = depthMatrix[row + 1][column];
      }
      if (!(row === 0)) {
        down = depthMatrix[row - 1][column];
      }

      if (value < up && value < down && value < left && value < right) {
        sum += 1 + value;
      }
    }
  }
  return sum;
};
const expand = (depthMatrix: number[][]) => {
  const pointsHitOverall = new Set();
  let sumSubArea: number[] = [];
  for (const [row, rowArr] of depthMatrix.entries()) {
    for (const [column, value] of rowArr.entries()) {
      if (
        !pointsHitOverall.has(column + "," + row) &&
        depthMatrix[row][column] !== 9
      ) {
        const pointsHitRegion = new Set();
        let expanded = false;
        pointsHitRegion.add(column + "," + row);
        let iterationPoints = [Point(column, row)];
        let points = iterationPoints;
        do {
          iterationPoints = [];
          let pointsAdded = false;
          expanded = false;

          for (const point of points) {
            const rowArray = depthMatrix[point.y];
            const row = point.y;
            const column = point.x;
            let right = 9;
            let left = 9;
            let up = 9;
            let down = 9;
            if (!(column === rowArray.length - 1)) {
              right = rowArray[column + 1];
            }
            if (!(column === 0)) {
              left = rowArray[column - 1];
            }
            if (!(row === depthMatrix.length - 1)) {
              up = depthMatrix[row + 1][column];
            }
            if (!(row === 0)) {
              down = depthMatrix[row - 1][column];
            }
            if (left !== 9 && !pointsHitRegion.has(column - 1 + "," + row)) {
              iterationPoints.push(Point(column - 1, row));
            }
            if (right !== 9 && !pointsHitRegion.has(column + 1 + "," + row)) {
              iterationPoints.push(Point(column + 1, row));
            }
            if (up !== 9 && !pointsHitRegion.has(column + "," + (row + 1))) {
              iterationPoints.push(Point(column, row + 1));
            }
            if (down !== 9 && !pointsHitRegion.has(column + "," + (row + 1))) {
              iterationPoints.push(Point(column, row - 1));
            }
          }
          for (const point of iterationPoints) {
            const pointStr = point.x + "," + point.y;
            if (!pointsHitRegion.has(pointStr)) {
              pointsHitRegion.add(pointStr);
              pointsHitOverall.add(pointStr);
              expanded = true;
            }
          }
          points = iterationPoints;
        } while (expanded);

        sumSubArea.push(pointsHitRegion.size);
      }
    }
  }
  console.log(sumSubArea.sort((a, b) => b - a));
  return sumSubArea
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, curr) => prev * curr);
};

console.log(part1(depths));
console.log(expand(depths));
