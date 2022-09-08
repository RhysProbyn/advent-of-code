import * as fs from "fs";

const inputFile = (arg: string) => {
  if (Boolean(arg)) {
    return arg;
  } else {
    throw new Error("no input file specified");
  }
};

const file = fs.readFileSync(inputFile(process.argv[2]), "utf8");
const input: string[] = file.split("\n");

interface BingoNumber {
  number: number;
  checked: boolean;
}

interface BingoCard {
  card: BingoNumber[][];
  hasWon: boolean;
  cardId: number;
}

const transposeMatrix = (matrix: any[][]) =>
  matrix[0].map((_, columnIndex) =>
    matrix.map((_, rowIndex) => matrix[rowIndex][columnIndex])
  );

// assume drawn numbers on first line of input
const parseDrawnNumbers = (list: string[]) => {
  return list[0].split(",").map((num) => parseInt(num.trim()));
};

const parseBingoCards = (list: string[]) => {
  let cards: BingoCard[] = [];
  for (let index = 0; index < list.length; index++) {
    if (list[index] === "") {
      const cardObject: BingoCard = {
        card: list.slice(index + 1, index + 6).map((line) =>
          line
            .split(" ")
            .filter((char) => char !== "")
            .map(
              (val): BingoNumber => ({
                number: parseInt(val.trim()),
                checked: false,
              })
            )
        ),
        hasWon: false,
        cardId: index + 1,
      };
      cards.push(cardObject);
    }
  }
  return cards;
};

const checkCard = (card: BingoCard, drawnNumber: number) => {
  for (const row of card.card.concat(transposeMatrix(card.card))) {
    let checkCount = 0;
    for (const cardNumber of row) {
      if (cardNumber.checked) {
        checkCount++;
      } else if (!cardNumber.checked && drawnNumber === cardNumber.number) {
        cardNumber.checked = true;
        checkCount++;
      }
    }
    if (checkCount === 5) {
      card.hasWon = true;
      return true;
    }
  }
  return false;
};

const winnerScore = (card: BingoCard, drawnNumber: number) => {
  let sumUnchecked = 0;
  card.card.map((row) =>
    row.map((cardNumber) => {
      if (!cardNumber.checked) {
        sumUnchecked += cardNumber.number;
      }
    })
  );
  return drawnNumber * sumUnchecked;
};

const bingoCards = parseBingoCards(input);
const drawnNumbers = parseDrawnNumbers(input);

let firstWon = false;
let firstWinnerScore = 0;
let lastWinnerScore = 0;
let firstWinnerId = 0;
let finalWinnerId = 0;
for (const drawnNumber of drawnNumbers) {
  console.log("number is " + drawnNumber);
  for (const bingoCard of bingoCards) {
    if (!bingoCard.hasWon) {
      const isWinner = checkCard(bingoCard, drawnNumber);
      if (isWinner) {
        const score = winnerScore(bingoCard, drawnNumber);
        console.log(`Bingo!!! Card ID: ${bingoCard.cardId} Score: ${score}`);
        if (!firstWon) {
          firstWinnerScore = score;
          firstWon = true;
          firstWinnerId = bingoCard.cardId;
        }
        lastWinnerScore = score;
        finalWinnerId = bingoCard.cardId;
      }
    }
  }
}
console.log(
  `First winner: Card ID: ${firstWinnerId} Score: ${firstWinnerScore}`
);
console.log(
  `Final winner: Card ID: ${finalWinnerId} Score: ${lastWinnerScore}`
);
