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
  const readings = entry[1];
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
  const len2: string[] = wireMap.get(2)[0];
  const len3: string[] = wireMap.get(3)[0];
  const len4: string[] = wireMap.get(4)[0];
  const len7: string[] = wireMap.get(7)[0];
  for (const len3char of len3) {
    // console.log(signal);
    if (!len2.includes(len3char)) {
      console.log("setting a", len3char);

      origMap.set("a", len3char);
      break;
      // if()
    }
  }
  // finding the original a, b and e segments
  for (const len5 of wireMap.get(5)) {
    const is3 = len2.every((len2char) => len5.includes(len2char)); // if true this is a 3 digit

    if (is3) {
      for (const len4char of len4) {
        if (!len5.includes(len4char)) {
          origMap.set("b", len4char);
          console.log("setting b", len4char);
        }
      }
    }
  }
  for (const len5 of wireMap.get(5)) {
    const is3 = len2.every((len2char) => len5.includes(len2char));

    if (len5.includes(origMap.get("b"))) {
      // this must be digit 5

      for (const len7char of len7) {
        if (!len5.includes(len7char)) {
          if (len2.includes(len7char)) {
            origMap.set("c", len7char);
            console.log("setting c", len7char);
          }
        }
      }
      for (const len2char of len2) {
        if (len5.includes(len2char)) {
          origMap.set("f", len2char);
          console.log("setting f", len2char);
        }
      }
    }
  }
  for (const len5 of wireMap.get(5)) {
    const is3 = len2.every((len2char) => len5.includes(len2char)); // if true this is a 3 digit

    if (!is3) {
      // console.log(len5);

      if (!len5.includes(origMap.get("b"))) {
        for (const len5_2 of wireMap.get(5)) {
          const is3_2 = len2.every((len2char) => len5_2.includes(len2char));
          if (is3_2) {
            for (const len5char of len5) {
              if (!len5_2.includes(len5char)) {
                // console.log(len5char);

                origMap.set("e", len5char);
                console.log("setting e", len5char);
                break;
              }
            }
          }
          // console.log("setting b");
        }
      }
    }
  }
  const existingMaps = Array.from(origMap.values());
  for (const len4char of len4) {
    if (!existingMaps.includes(len4char)) {
      origMap.set("d", len4char);
      console.log("setting d", len4char);
    }
  }
  for (const len7char of len7) {
    if (!existingMaps.includes(len7char)) {
      origMap.set("g", len7char);
      console.log("setting g", len7char);
    }
  }
  // console.log(origA);/
  // for (const len5 of wireMap.get(5)) {
  //   const is3 = len2.every((len2char) => len5.includes(len2char)); // if true this is a 3 digit

  //   if (is3) {
  //     for (const len5char of len5) {
  //       if (!origMap.has(len5char)) {
  //         origMap.set("g", len5char);
  //         console.log("setting g");
  //         break;
  //       }
  //     }
  //   }
  // }
  // console.log(origMap);

  // for (const len7char of len7) {
  //   if (!origMap.has(len7char)) {
  //     origMap.set("e", len7char);
  //     break;
  //   }
  // }
  // console.log(origMap);
  return origMap;
}

// console.log(entries);
// const entries = initialState[1];

// initialState.map((entry) => console.log(entry[1]));

("");
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
  // console.log(reading);

  const digitMap = part2(entry);
  const readingMapped = reading.map((x) => x.map((y) => digitMap.get(y)));
  // console.log(readingMapped);
  // console.log(digitMap);
  for (let i = 0; i < 10; i++) {
    const digit = digitsSplit[i];
    console.log(
      readingMapped.map((x) => digit.every((d) => readingMapped.includes(x)))
    );
  }
  // console.log(readingString);
}
