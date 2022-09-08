import * as fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

const file: string = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const entries: string[][][] = file
  .split("\n")
  .map((x) =>
    x.split("|").map((x) => x.replace("\r", "").split(" ").filter(Boolean))
  );

function part1(entry: string[][]) {
  const segmentCount = new Array(9).fill(0);
  const readings = entry[1];
  for (const reading of readings) {
    // console.log(reading);
    segmentCount[reading.length]++;
  }
  return segmentCount[2] + segmentCount[3] + segmentCount[4] + segmentCount[7];
}

function part2(entry: string[][]) {
  const signals = entry[0];
  const wireMap = new Map();
  const origMap: Map<string, string> = new Map();
  for (const signal of signals) {
    const wires = signal.split("");
    // console.log(wires);
    const wireLen = wires.length;
    const exWireLen = wireMap.get(wireLen);
    if (wireMap.get(wireLen)) {
      wireMap.set(wireLen, [...exWireLen, wires]);
    } else {
      wireMap.set(wireLen, [wires]);
    }
  }
  const digit1: string[] = wireMap.get(2)[0];
  const digit7: string[] = wireMap.get(3)[0];
  const digit4: string[] = wireMap.get(4)[0];
  const digit8: string[] = wireMap.get(7)[0];

  let digit0: string[];
  let digit2: string[];
  let digit3: string[] = [];
  let digit5: string[];
  let digit6: string[];
  let digit9: string[];

  // finding original a
  for (const len3char of digit7) {
    // console.log(signal);
    if (!digit1.includes(len3char)) {
      // console.log("setting a", len3char);

      origMap.set("a", len3char);
      break;
      // if()
    }
  }
  // finding the original a, b and e segments
  for (const len5 of wireMap.get(5)) {
    // if true this is a 3 digit
    const is3 = digit1.every((len2char) => len5.includes(len2char));

    if (is3) {
      digit3 = len5;
      for (const len4char of digit4) {
        if (!len5.includes(len4char)) {
          origMap.set("b", len4char);
          // console.log("setting b", len4char);
        } else if (!digit1.includes(len4char)) {
          origMap.set("d", len4char);
          // console.log("setting d", len4char);
        }
      }
    }
  }
  for (const len5 of wireMap.get(5)) {
    if (len5.includes(origMap.get("b"))) {
      // this must be digit 5
      digit5 = len5;
      for (const len7char of digit8) {
        if (!len5.includes(len7char)) {
          if (digit1.includes(len7char)) {
            origMap.set("c", len7char);
            // console.log("setting c", len7char);
          }
        }
      }
      for (const len2char of digit1) {
        if (len5.includes(len2char)) {
          origMap.set("f", len2char);
          // console.log("setting f", len2char);
        }
      }
    }
  }
  for (const len5 of wireMap.get(5)) {
    const is3 = digit1.every((len2char) => len5.includes(len2char));
    // looping back through 5s to find e

    if (!is3) {
      // ignoring 3, we know 5 has original "b" and we ignore that to find 2
      if (!len5.includes(origMap.get("b"))) {
        // what is in 3 that is not in 2... "e"
        for (const len5char of len5) {
          if (!digit3.includes(len5char)) {
            origMap.set("e", len5char);
            // console.log("setting e", len5char);
            break;
          }
        }
      }
    }
  }
  const existingMaps = Array.from(origMap.values());
  for (const len7char of digit8) {
    if (!existingMaps.includes(len7char)) {
      origMap.set("g", len7char);
      // console.log("setting g", len7char);
    }
  }
  const flippedMap: Map<string, string> = new Map();
  for (const key of origMap.keys()) {
    flippedMap.set(origMap.get(key) as string, key);
  }

  return flippedMap;
}

const digitArray: string[] = [
  "abcefg",
  "cf",
  "acdeg",
  "acdfg",
  "bdcf",
  "abdfg",
  "abdefg",
  "acf",
  "abcdefg",
  "abcdfg",
];
let sum = 0;
const digitsSplit = digitArray.map((d) => d.split(""));
for (const entry of entries) {
  let readingString = "";
  const reading = entry[1].map((x) => x.split(""));

  const digitMap = part2(entry);
  const readingsMapped = reading.map((x) =>
    x.map((y) => digitMap.get(y) as string)
  );
  for (const reading of readingsMapped) {
    for (let i = 0; i < 10; i++) {
      const digit = digitsSplit[i];
      if (reading.length === digit.length) {
        if (digit.every((char) => reading.includes(char))) {
          readingString += i;
        }
      }
    }
  }
  console.log(readingString);
  sum += parseInt(readingString);
}
console.log("total: " + sum);
