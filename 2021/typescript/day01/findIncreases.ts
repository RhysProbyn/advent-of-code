import * as fs from 'fs';

const file = fs.readFileSync('./input/testInput.csv','utf8');
console.log(typeof(NaN))

// splitting text and mapping to Number and filtering out bad inputs
// const depthArray = file.split("\n").map((val1)=>{
//   if(Boolean(val1)){
//     return(Number(val1))
//   }
// }).filter((val2)=>Boolean(val2)) as number[] 


// doing the same on one line - wowzer
const depthArray = file.split("\n").map(val1 => Boolean(val1) ? Number(val1) : NaN).filter((val2) => !isNaN(val2))

console.log(depthArray)

let increases = 0

for (let index = 1; index < depthArray.length; index++) {
  const previousItem = depthArray[index-1]
  if (previousItem < depthArray[index]) {
    increases += 1
  }
}

console.log(increases)