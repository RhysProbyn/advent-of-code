import * as fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

const file = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const initialState: number[] = file.split(",").map((x) => parseInt(x.trim()));

// console.log(initialState);
const handleCycle = (day: number) => {
  if (day > 0) {
    return [day - 1];
  } else {
    return [6, 8];
  }
};

const findNumberOfLaternfish = (iterations: number) => {
  // let updatedStateArray = initialState.map((val) => [val, iterations]);
  // // console.log(updatedStateArray);

  // let total = 0;
  // let totalNumberOfArrays = updatedStateArray.length;
  // for (let j = 0; j < totalNumberOfArrays; j++) {
  //   let updatedState = [updatedStateArray[j][0]];
  //   const subIterations = updatedStateArray[j][1];
  //   for (let i = 0; i < subIterations; i++) {
  //     updatedState = updatedState.flatMap(handleCycle);
  //     const stateLength = updatedState.length;
  //     const firstHalf = updatedState.slice(0, stateLength / 2);
  //     if (stateLength > 3) {
  //       const updatedStateAdds = updatedState.map((val) => [
  //         val,
  //         iterations - i,
  //       ]);
  //       updatedStateArray = updatedStateArray.concat(updatedStateAdds);
  //       totalNumberOfArrays += stateLength;
  //       console.log(updatedStateArray);
  //     }
  //   }
  //   total += updatedState.length;
  // }
  return total;
};

const numberOfCycles = 18;
console.log("Attempting to perform " + numberOfCycles + " cycles");
const start = Date.now();
// for (var i = 0; i < numberOfComputations; i++) {
//   findWindowIncreases(depthArray);
// }
console.log(findNumberOfLaternfish(numberOfCycles));
const milliseconds = Date.now() - start;

console.log(
  numberOfCycles +
    " computations performed in " +
    milliseconds +
    " milliseconds"
);
