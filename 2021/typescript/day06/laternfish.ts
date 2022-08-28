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
  let updatedStateArray = initialState.map((val) => [val, 0]);
  // console.log(updatedStateArray);
  // console.log(updatedStateArray);

  let total = 0;
  let totalNumberOfArrays = updatedStateArray.length;
  let updatedState = [updatedStateArray[0][0]];
  for (let j = 0; j < totalNumberOfArrays; j++) {
    let subIterations = updatedStateArray[j][1];
    for (let i = subIterations; i < iterations; i++) {
      updatedState = updatedState.flatMap(handleCycle);
      const stateLength = updatedState.length;
      // console.log(stateLength);

      if (stateLength > 3) {
        console.log("i", i);

        const updatedStateAdds = updatedState.map((val) => [val, i]);
        updatedStateArray = updatedStateArray.concat(updatedStateAdds);
        totalNumberOfArrays += stateLength - 1;
        // console.log(updatedStateArray);
        // console.log("j", j);
        total += updatedState.length;

        break;
      }
    }
    console.log(updatedState);
  }
  total += updatedState.length;
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
