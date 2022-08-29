import * as fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

function part1(positionArray: number[]) {
  let moves: number[] = [];
  for (let i = 0; i < Math.max(...positionArray); i++) {
    moves.push(
      positionArray
        .map((position) => Math.abs(position - i))
        .reduce((total, value) => total + value)
    );
  }
  return Math.min(...moves);
}

function part2(positionArray: number[]) {
  let moves: number[] = [];
  for (let i = 0; i < Math.max(...positionArray); i++) {
    moves.push(
      positionArray
        .map((position, index) => {
          const distance = Math.abs(position - i);
          let fuel = 0;
          for (let j = 0; j <= distance; j++) {
            fuel += j;
          }
          return fuel;
        })
        .reduce((total, value) => total + value)
    );
  }
  return Math.min(...moves);
}

const file = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const initialState: number[] = file.split(",").map((x) => parseInt(x.trim()));

console.log("Part 1: Minimum moves: " + part1(initialState));
console.log("Part 2: Minimum fuel:  " + part2(initialState));

// 2ez
