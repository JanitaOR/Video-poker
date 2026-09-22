export const startCoinValue = 100;

const suits = ["❤️", "♠️", "♦️", "♣️"];

const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

export const cardDeck = suits.flatMap((suit) =>
  ranks.map((rank) => ({ suit, rank })),
);
