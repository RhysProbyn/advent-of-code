import * as fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

const report = file.split("\n").map((line) => line.split(""));

// transposing the matrix makes it easier to find most common bit in a column
const transposeMatrix = (matrix: any[][]) =>
  matrix[0].map((column: any, columnIndex: number) => {
    return matrix.map(
      (row: any, rowIndex: number) => matrix[rowIndex][columnIndex]
    );
  });

// interface keeps typescript happy when creating an object with assignments
// what else can it do?
interface NumberMap {
  [key: string]: number;
}

// I probably could have just used an array and kept track of the index
// or maybe a Map is better?
const mostCommonBit = (row: string[]) => {
  let bitCount: NumberMap = {
    "0": 0,
    "1": 0,
  };
  row.map((bit) => (bitCount[bit] += 1));
  return bitCount["0"] >= bitCount["1"] ? "0" : "1";
};

const leastCommonBit = (row: string[]) => {
  let bitCount: NumberMap = {
    "0": 0,
    "1": 0,
  };
  row.map((bit) => (bitCount[bit] += 1));

  return bitCount["0"] <= bitCount["1"] ? "0" : "1";
};

// passing in a function to find bit to filter
// functions assigned to "any" type
const filterReport = (matrix: string[][], filterFunc: any) => {
  let filteredMatrix = matrix;
  for (let i = 0; i < matrix[0].length; i++) {
    if (filteredMatrix.length === 1) {
      return filteredMatrix[0];
    }
    let transposedMatrix: string[][] = transposeMatrix(filteredMatrix);
    let row = transposedMatrix[i];
    const mostCommon = filterFunc(row);
    filteredMatrix = filteredMatrix.filter((mRow) => mRow[i] === mostCommon);
  }
  return filteredMatrix[0];
};

// parseInt can take an arg setting base
const findGammaRate = (matrix: string[][]) =>
  parseInt(matrix.map((col: string[]) => mostCommonBit(col)).join(""), 2);

const findEpsilonRate = (matrix: string[][]) =>
  parseInt(matrix.map((col: string[]) => leastCommonBit(col)).join(""), 2);

const findOxygenRating = (matrix: string[][]) =>
  parseInt(filterReport(matrix, mostCommonBit).join(""), 2);

const findScrubberRating = (matrix: string[][]) =>
  parseInt(filterReport(matrix, leastCommonBit).join(""), 2);

const gammaRate = findGammaRate(report);
const epsilonRate = findEpsilonRate(report);
const oxygenRating = findOxygenRating(report);
const scrubberRating = findScrubberRating(report);

console.log(`gamma rate: ${gammaRate}`);
console.log(`epsilon rate: ${epsilonRate}`);
console.log(`power consumption: ${gammaRate * epsilonRate}`);
console.log(`oxygen generator rating: ${oxygenRating}`);
console.log(`CO2 scrubber rating: ${scrubberRating}`);
console.log(`life support rating: ${oxygenRating * scrubberRating}`);
