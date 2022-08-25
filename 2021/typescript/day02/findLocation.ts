import * as fs from "fs";


const file = fs.readFileSync("./input.txt", "utf8");

const movements:[string,number][]=file
.split("\n")
.map((line)=>line.replace("\r",""))
.map((line)=>line.split(" ")).map(move=>[move[0],Number(move[1])])

let depth = 0
let horizontal = 0

const moveForward = (val:number) => horizontal += val
const moveUp = (val:number) => depth -= val
const moveDown = (val:number) => depth += val

const moveMap:any = {
  "forward":moveForward,
  "up":moveUp,
  "down":moveDown
}

movements.forEach(move => {
  moveMap[move[0]](move[1])  
});

console.log(depth,horizontal)
console.log(depth*horizontal)
