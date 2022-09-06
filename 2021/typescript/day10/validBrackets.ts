import fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

const file: string = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const brackets: string[][] = file.split("\n").map((x) => x.trim().split(""));

interface stringKeyObject {
  [key: string]: any;
}
const findScorePart1 = (bracketList: string[]): number => {
  const closeMap: stringKeyObject = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };
  const score: stringKeyObject = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };
  let bracketStack: string[] = [];
  if (bracketList[0] in closeMap) {
    return score[bracketList[0]];
  }
  for (let i = 0; i < bracketList.length; i++) {
    const bracket = bracketList[i];
    if (closeMap[bracket]) {
      const topElement = bracketStack.length === 0 ? "#" : bracketStack.pop();
      if (topElement !== closeMap[bracket]) {
        return score[bracket];
      }
      // opening bracket case
    } else {
      bracketStack.push(bracket);
    }
  }
  return 0;
};
const findScorePart2 = (bracketList: string[]): number => {
  const closeMap: stringKeyObject = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };
  const score: stringKeyObject = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
  };
  const openMap: stringKeyObject = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  };
  let bracketStack: string[] = [];
  let closeStack: string[] = [];
  if (bracketList[0] in closeMap) {
    return score[bracketList[0]];
  }
  for (let i = 0; i < bracketList.length; i++) {
    const bracket = bracketList[i];
    if (bracket in closeMap) {
      const topElement = bracketStack.length === 0 ? "#" : bracketStack.pop();
      if (topElement !== closeMap[bracket]) {
        return 0;
      } else {
        closeStack.pop();
      }
      // opening bracket case
    } else {
      bracketStack.push(bracket);
      closeStack.push(openMap[bracket]);
    }
  }
  let sumScore = 0;
  for (const missingCloser of closeStack.reverse()) {
    sumScore = sumScore * 5 + score[missingCloser];
  }
  return sumScore;
};

let sum = 0;
for (const line of brackets) {
  sum += findScorePart1(line);
}
console.log("Part 1 score:", sum);

let scoreArray: number[] = [];
for (const line of brackets) {
  const score = findScorePart2(line);
  if (score !== 0) scoreArray.push(score);
}

console.log(
  "Part 2 score:",
  scoreArray.sort((a, b) => a - b)[Math.floor(scoreArray.length / 2)]
);
