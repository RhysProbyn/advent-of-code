import * as fs from "fs";


const file = fs.readFileSync("./input.txt", "utf8");

const movements:[string,number][]=file
.split("\n")
.map((line)=>line.replace("\r",""))
.map((line)=>line.split(" ")).map(move=>[move[0],Number(move[1])])

let aim = 0
let horizontal = 0
let depth = 0

const moveForward = (val:number) => {
  horizontal += val
  depth += aim*val
}
const aimUp = (val:number) => aim -= val
const aimDown = (val:number) => aim += val

const moveMap:any = {
  "forward":moveForward,
  "up":aimUp,
  "down":aimDown
}

movements.forEach(move => moveMap[move[0]](move[1]));

console.log(depth,horizontal)
console.log(depth*horizontal)
