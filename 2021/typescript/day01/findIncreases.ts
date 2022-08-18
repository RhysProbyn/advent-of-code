import * as fs from 'fs';

const file = fs.readFileSync('./input/testInput.csv','utf8');

// splitting text and mapping to Number and filtering out bad inputs
// const depthArray = file.split("\n").map((line)=>{
//   if(Boolean(line)){
//     return(Number(line))
//   }
// }).filter((line)=>Boolean(line)) as number[] 


// doing the same on one line - wowzer
const depthArray = file.split("\n").map(val1 => Boolean(val1) ? Number(val1) : null).filter(val2 => Boolean(val2)) as number[] 

console.log(depthArray)

let increases = 0

for (let index = 1; index < depthArray.length; index++) {
  const previousItem = depthArray[index-1]
  if (previousItem < depthArray[index]) {
    increases += 1
  }
}

console.log(increases)