import * as fs from "fs";

const file = fs.readFileSync("./input/depths.csv", "utf8");

// splitting text and mapping to Number and filtering out bad inputs
const depthArray = file
  .split("\n")
  .map(parseFloat)
  .filter((num) => !isNaN(num));

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
