import type { NextPage } from "next";
import Head from "next/head";
import { type } from "os";
import text from "../env/testInput.js"; // Relative path to your File
import React, { useState } from "react";
console.log(text);

const file: string = text;
const octopiMatrix: number[][] = file.split("\n").map((x) =>
  x
    .trim()
    .split("")
    .map((y) => y.trim())
    .map((z) => parseInt(z))
);
console.log(octopiMatrix);
const increaseLocation = (matrix: number[][], x: number, y: number) => {
  let pointsToIncrease: PointObject[] = [];
  let increasedMatrix = matrix;
  if (0 <= x && x < matrix[0]!.length && 0 <= y && y <= matrix.length) {
    const val = matrix[y]![x];
    if (val === 9) {
      let right: PointObject;
      let left: PointObject;
      let up: PointObject;
      let down: PointObject;
      // right
      pointsToIncrease.push(Point(x + 1, y));
      // left
      pointsToIncrease.push(Point(x - 1, y));
      // up
      pointsToIncrease.push(Point(x, y + 1));
      //down
      pointsToIncrease.push(Point(x, y - 1));
      increasedMatrix[y]![x] = 0;
    } else {
      increasedMatrix[y]![x]++;
    }
  }
  return [increasedMatrix, pointsToIncrease];
};

const increaseEnergy = (matrix: number[][]) => {
  const increased = new Set();
  let iteratedMatrix = matrix;
  let flashed = true;
  let pointsToIncrease: PointObject[] = [];
  iteratedMatrix = matrix.map((row) => row.map((column) => column + 1));
  let newPoints = [iteratedMatrix];
  while (newPoints) {
    flashed = true;
    for (const [yIndex, row] of iteratedMatrix.entries()) {
      for (const [xIndex, column] of row.entries()) {
        if (!increased.has([column, row].toString())) {
          if (column === 10) {
            let right: number[];
            let left: number[];
            let up: number[];
            let down: number[];
            if (xIndex !== row.length - 1) {
              right = [xIndex + 1, yIndex];
              if (!increased.has(right)) {
              }
            }
            if (xIndex !== 0) {
              left = [xIndex - 1, yIndex];
            }
            if (xIndex !== matrix.length - 1) {
              up = [xIndex, yIndex + 1];
            }
            if (xIndex !== 0) {
              pointsToIncrease.push(Point(xIndex, yIndex - 1));
              down = [xIndex, yIndex - 1];
            }
            flashed = true;
            return 0;
          } else {
            return column + 1;
          }
        }
      }
    }
  }
};
interface PointObject {
  x: number;
  y: number;
}
const Point = (x: number, y: number): PointObject => {
  return { x: x, y: y };
};
const expand = (depthMatrix: number[][]) => {
  const pointsHitOverall = new Set();
  let sumSubArea: number[] = [];
  for (const [row, rowArr] of depthMatrix.entries()) {
    for (const [column, value] of rowArr.entries()) {
      if (
        !pointsHitOverall.has([column, row].toString()) &&
        depthMatrix[row][column] !== 9
      ) {
        const pointsHitRegion = new Set();
        let expanded = false;
        pointsHitRegion.add([column, row].toString());
        let iterationPoints = [Point(column, row)];
        let points = iterationPoints;
        do {
          iterationPoints = [];
          expanded = false;

          for (const point of points) {
            const rowArray = depthMatrix[point.y];
            const row = point.y;
            const column = point.x;
            let right = 9;
            let left = 9;
            let up = 9;
            let down = 9;
            if (!(column === rowArray.length - 1)) {
              right = rowArray[column + 1];
            }
            if (!(column === 0)) {
              left = rowArray[column - 1];
            }
            if (!(row === depthMatrix.length - 1)) {
              up = depthMatrix[row + 1][column];
            }
            if (!(row === 0)) {
              down = depthMatrix[row - 1][column];
            }
            if (
              left !== 9 &&
              !pointsHitRegion.has([column - 1, row].toString())
            ) {
              iterationPoints.push(Point(column - 1, row));
            }
            if (
              right !== 9 &&
              !pointsHitRegion.has([column + 1, row].toString())
            ) {
              iterationPoints.push(Point(column + 1, row));
            }
            if (
              up !== 9 &&
              !pointsHitRegion.has([column, row + 1].toString())
            ) {
              iterationPoints.push(Point(column, row + 1));
            }
            if (
              down !== 9 &&
              !pointsHitRegion.has([column, row + 1].toString())
            ) {
              iterationPoints.push(Point(column, row - 1));
            }
          }
          for (const point of iterationPoints) {
            const pointStr = [point.x, point.y].toString();
            if (!pointsHitRegion.has(pointStr)) {
              pointsHitRegion.add(pointStr);
              pointsHitOverall.add(pointStr);
              expanded = true;
            }
          }
          points = iterationPoints;
          console.log(pointsHitRegion);
          console.log(pointsHitOverall);
        } while (expanded);

        sumSubArea.push(pointsHitRegion.size);
      }
    }
  }
  console.log(sumSubArea.sort((a, b) => b - a));
  return sumSubArea
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, curr) => prev * curr);
};

const Home: NextPage = () => {
  const [octoMatrix, setOctoMatrix] = useState(octopiMatrix);
  // init()
  const handleIterate = () => {
    setOctoMatrix(increaseEnergy(octoMatrix));
  };
  return (
    <>
      <Head>
        <title>Dumbo Octopus</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          <span className="text-purple-300">Dumbo</span> Octopus
        </h1>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <Button onClick={handleIterate} text={"iterate"} />
        <div>
          <OctupusGrid matrix={octoMatrix} />
        </div>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
          <TechnologyCard
            name="Next-Auth"
            description="Authentication for Next.js"
            documentation="https://next-auth.js.org/"
          />
          <TechnologyCard
            name="Prisma"
            description="Build data-driven JavaScript & TypeScript apps in less time"
            documentation="https://www.prisma.io/docs/"
          />
        </div>
      </main>
    </>
  );
};

type ButtonProps = {
  onClick: any;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps) => (
  <button onClick={onClick}>{text}</button>
);

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

type OctopusProps = {
  energyLevel: number;
};

const Octopus = ({ energyLevel }: OctopusProps) => {
  return (
    <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
      {energyLevel}
    </div>
  );
};

type OctopusGridProps = {
  matrix: number[][];
};
const OctupusGrid = ({ matrix }: OctopusGridProps) => {
  return (
    <div className="flex flex-row">
      {matrix.map((numArray, yindex) => {
        return (
          <ol key={yindex.toString()}>
            {numArray.map((num, xindex) => {
              return (
                <li
                  className="border-gray-500 w-10 h-10 "
                  key={xindex + "," + yindex}
                >
                  {num}
                </li>
              );
            })}
          </ol>
        );
      })}
    </div>
  );
};
