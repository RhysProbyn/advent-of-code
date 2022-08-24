import * as fs from "fs";

const file = fs.readFileSync("./input/depths.csv", "utf8");

// splitting text and mapping to Number and filtering out bad inputs
const depthArray = file
  .split("\n")
  .map(parseFloat)
  .filter((num) => !isNaN(num));

const findWindowIncreases = (array: number[]) => {
  let increases = 0;
  let previousWindow = array[0] + array[1] + array[2];
  for (let index = 3; index < array.length; index++) {
    const currentWindow = array[index - 2] + array[index - 1] + array[index];
    if (previousWindow < currentWindow) {
      increases += 1;
    }
    previousWindow = currentWindow;
  }
  return increases;
};

console.log(findWindowIncreases(depthArray) + " increases in depth");

// const numberOfComputations = 100000
// const start = Date.now();
// for (var i = 0; i < numberOfComputations; i++) {
//   findWindowIncreases(depthArray);
// }
// const milliseconds = Date.now() - start;

// console.log(numberOfComputations+" computations performed in "+milliseconds + " milliseconds")
