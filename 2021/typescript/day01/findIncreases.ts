import * as fs from "fs";

const file = fs.readFileSync("./input/depths.csv", "utf8");

// splitting text and mapping to Number and filtering out bad inputs
// doing on one line - wowzer
const depthArray = file
  .split("\n")
  .map(parseFloat)
  .filter((num) => !isNaN(num));

// console.log(depthArray)

const findIncreases = (array: number[]) => {
  let increases = 0;
  let previousNumber = array[0];
  for (let index = 1; index < array.length; index++) {
    const currentNumber = array[index];
    if (previousNumber < currentNumber) {
      increases += 1;
    }
    previousNumber = currentNumber;
  }
  return increases;
};

console.log(findIncreases(depthArray) + " increases in depth");
