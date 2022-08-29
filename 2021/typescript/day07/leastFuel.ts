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

console.log(initialState);

console.log(
  initialState.reduce((total, value) => total + value) / initialState.length
);
let options: number[] = [];
let moves: number[] = [];
for (let i = 0; i < Math.max(...initialState); i++) {
  moves.push(
    initialState
      .map((position) => Math.abs(position - i))
      .reduce((total, value) => total + value)
  );
}
// options.push(moves.reduce((total, value) => total + value));
console.log("Best position: " + moves.indexOf(Math.min(...moves)));
console.log("Minimum moves: " + Math.min(...moves));
