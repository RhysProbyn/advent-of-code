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

const ageCount = new Array(9).fill(0);
initialState.map((age) => (ageCount[age] += 1));

console.log(ageCount);
const iterations = 256;
for (let i = 0; i < iterations; i++) {
  const zeroAge = ageCount.shift();
  ageCount[8] = zeroAge;
  ageCount[6] += zeroAge;
  // console.log(i);
}
console.log(ageCount.reduce((total, val) => total + val));
