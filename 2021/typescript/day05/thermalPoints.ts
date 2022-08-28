import * as fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

const file = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const input: string[] = file.split("\n");

interface point {
  x: number;
  y: number;
}

interface line {
  startPoint: point;
  endPoint: point;
}

let xVals: number[] = [];
let yVals: number[] = [];

const lines = input
  .map((fileLine) => fileLine.split(" -> "))
  .map((line) =>
    line
      .map((point) => point.split(",").map(parseFloat))
      .map((coord): point => {
        xVals.push(coord[0]);
        yVals.push(coord[1]);
        return { x: coord[0], y: coord[1] };
      })
  )
  .map((coords): line => ({ startPoint: coords[0], endPoint: coords[1] }));

const maxX = Math.max(...xVals);
const maxY = Math.max(...yVals);

// this was tricky for some reason
let oceanFloor = [...Array(maxY + 1)].map((x) => Array(maxX).fill(0));

lines.map((line) => {
  const startX = line.startPoint.x;
  const endX = line.endPoint.x;
  const startY = line.startPoint.y;
  const endY = line.endPoint.y;
  if (startX === endX) {
    for (
      let yVal = Math.min(startY, endY);
      yVal <= Math.max(startY, endY);
      yVal++
    ) {
      // console.log(
      //   `setting (${startX},${yVal}) to ${oceanFloor[yVal][startX] + 1}`
      // );
      oceanFloor[yVal][startX]++;
    }
  } else if (startY === endY) {
    for (
      let xVal = Math.min(startX, endX);
      xVal <= Math.max(startX, endX);
      xVal++
    ) {
      // console.log(
      //   `setting (${xVal},${startY}) to ${oceanFloor[startY][xVal] + 1}`
      // );
      oceanFloor[startY][xVal]++;
    }
  } else {
    let yVal = startY;
    let xVal = startX;
    const xIter = startX < endX ? 1 : -1;
    const yIter = startY < endY ? 1 : -1;

    for (let i = 0; i <= Math.abs(startX - endX); i++) {
      // console.log(`setting (${xVal},${yVal}) to ${oceanFloor[yVal][xVal] + 1}`);
      oceanFloor[yVal][xVal]++;
      xVal += xIter;
      yVal += yIter;
    }
  }
});
let dangerPoints = 0;
oceanFloor.map((yCoord) =>
  yCoord.map((xCoord) => (xCoord >= 2 ? dangerPoints++ : null))
);
console.log(dangerPoints + " points 2 or greater");
// not very functional today
