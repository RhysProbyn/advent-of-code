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

const transposeMatrix = (matrix: any[][]) =>
  matrix[0].map((_, columnIndex) =>
    matrix.map((_, rowIndex) => matrix[rowIndex][columnIndex])
  );

const flippedDepths: number[][] = transposeMatrix(depths);
let sum = 0;
for (const [row, rowArray] of depths.entries()) {
  for (const [column, value] of rowArray.entries()) {
    let right = 10;
    let left = 10;
    let up = 10;
    let down = 10;
    try {
      right = rowArray[column + 1];
      right = right === undefined ? 10 : right;
    } catch {
      right = 10;
    }
    try {
      left = rowArray[column - 1];
      left = left === undefined ? 10 : left;
    } catch {
      left = 10;
    }
    try {
      up = depths[row - 1][column];
      up = up === undefined ? 10 : up;
    } catch {
      up = 10;
    }
    try {
      down = depths[row + 1][column];
      down = down === undefined ? 10 : down;
    } catch {
      down = 10;
    }
    console.log("value", value);

    console.log(8, up, 8);
    console.log(left, value, right);
    console.log(8, down, 8);

    if (value < up && value < down && value < left && value < right) {
      console.log("hit");

      console.log(value);
      sum += 1 + value;
      // console.log(flippedDepths[column][row]);
      // if (
      //   flippedDepths[column][row + 1] < value &&
      //   flippedDepths[column][row - 1] < value
      // ) {
      //   console.log("haha");
      // }
    }
  }
}
console.log(sum);
