import * as fs from 'fs';
const file = fs.readFileSync('./input/depths.csv','utf8');
const depthArray = file.split("\n").map(Number)
let increases = 0
for (let index = 1; index < depthArray.length; index++) {
  const previousItem = depthArray[index-1]
  if (previousItem < depthArray[index]) {
    increases += 1
  }
}
console.log(increases)