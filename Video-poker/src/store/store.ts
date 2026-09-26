// https://www.youtube.com/watch?v=ULS7LHNScHc

import { create } from "zustand";
import { persist } from "zustand/middleware";

//DATA:

//players
//currentPlayer
//selectPlayer

//dicardedCards
//gamePhase - waiting, holding, finished

//toggleHold
//draw

//calculatePayout
//finishRound

import type { PlayingCard } from "../Types/Type";
import { cardDeck, startCoinValue } from "../Data/Data";

type Bet = {
  currentBet: number;
  incrementOne: () => void;
  setMaxBet: () => void;
};

type TotalCoins = {
  playersCoins: number;
  subtractCoins: (amount: number) => void;
};

type GamePhase = "waiting" | "holding" | "finished"; // union type

type GameState = {
  gamePhase: GamePhase;

  deck: PlayingCard[];
  hand: PlayingCard[];

  heldCards: PlayingCard[];
  hold: boolean;
  discardedCards: PlayingCard[];

  dealOrDraw: () => void;
  toggleHeld: () => void;
  toggleHold: (card: PlayingCard) => void;
  finishGame: () => void;
};

type classStoreHold = "no-hold" | "hold";

type classStore = {
  classNameHold: classStoreHold;
  changeClassHold: () => void;
};

export const useClassStore = create<classStore>((set) => ({
  classNameHold: "no-hold",
  //forandre className på kortet slik at man ser at de er holdt eller ikke
  changeClassHold: () =>
    set(() => ({
      classNameHold: classNameHold,
    })),
}));

export const useGameStore = create<GameState>((set) => ({
  gamePhase: "waiting",

  deck: cardDeck,
  hand: [],
  heldCards: [],
  hold: false,
  discardedCards: [],

  dealOrDraw: () =>
    // sette på persist etter at logikken er ferdig.
    set((state) => {
      if (state.gamePhase === "waiting") {
        //hvor mye er satset
        const currentBet = useBetStore.getState().currentBet;

        //shuffel deck
        //når jeg bruker useDeckStore.getState().shuffleDeck(); for å hente data, så kjører shuffleDeck() funksjonen, shuffleDeck (uten()) henter funksjonen

        const shuffled = [...state.deck]; //kopi av arrayet

        for (let i = shuffled.length - 1; i > 0; i--) {
          //i blir index i arrayet av kort - 1, her blir dette 51.

          const randomIndex = Math.floor(Math.random() * (i + 1)); //Math.random gir et tilfeldig tall mellom 0 og 1 , f.eks 0.73 (0.73 * 51 = 37,23 Math.floor runder dette ned til 37.)

          [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
          ];
        }
        //trekk 5 kort
        const numberOfCards = 5;
        const drawCards = shuffled.slice(0, numberOfCards); // hent kort fra index 0 til 5, kortene fra index0-4(5 kort)) og legger disse i drawCards)

        const remainingCards = shuffled.slice(numberOfCards);
        const shuffleDeck = shuffled;

        console.log(currentBet, shuffleDeck, drawCards, remainingCards);
        return {
          gamePhase: "holding",
          shuffledDeck: shuffleDeck,
          deck: remainingCards,
          hand: drawCards,
        };
      }
      console.log("Ikke waiting!");
      return state;
    }),

  toggleHold: (card) =>
    set((state) => {
      console.log(state.hand);
      //const newHand: PlayingCard[] = [...state.hand];

      const newHand = state.hand.map((cardInHand) => {
        if (cardInHand.suit === card.suit && cardInHand.rank === card.rank) {
          console.log(card);
          //cardInHand.hold = !cardInHand.hold;
          console.log(cardInHand);

          return { ...cardInHand, hold: !cardInHand.hold };
        }
        return cardInHand;
      });
      console.log(state);
      console.log(newHand);
      return { hand: newHand };
    }),

  toggleHeld: () =>
    set((state) => {
      if (state.gamePhase === "holding") {
        //finn kort med hold:false og putt kortene med hold i discardedCards[]
        const heldCards = state.hand.filter((card) => card.hold === true); //trenger jeg egentlig denne?
        const discardedCards = state.hand.filter((card) => card.hold === false);

        console.log(heldCards);
        console.log(discardedCards);

        // trekk nye kort for disse kortene
        const numberOfCardToDraw = discardedCards.length;
        console.log(numberOfCardToDraw);
        console.log(state.hand);
        console.log(state.deck);

        const newCards = state.deck.slice(0, numberOfCardToDraw);
        const remainingCards = state.deck.slice(numberOfCardToDraw);

        console.log("discarded:", discardedCards.length);
        console.log("newCards:", newCards.length);

        const newHand = state.hand.map((card) => {
          if (card.hold === false) {
            //
            //
            //
            const newCard = newCards.shift(); // hvordan få denne til å teste at den ikke blir undefined

            while ((newCard = newCards()) !== "undefined") {
              console.log(newCard);
              return newCard;
            }
          }
          return card;
        });
        console.log(newHand);
        console.log(newCards);
        return {
          hand: newHand,
          deck: remainingCards,
          discardedCards: discardedCards,
        };
      }
      return state;
    }),
  //siste fase i spillet
  finishGame: () => ({}),
}));

export const useTotalCoins = create<TotalCoins>()(
  persist(
    (set) => ({
      playersCoins: startCoinValue, // byttes ved skifte av spiller?
      subtractCoins: (amount) =>
        set((state) => ({
          playersCoins: state.playersCoins - amount,
        })),
    }),
    {
      name: "totalCoins",
    },
  ),
);

export const useBetStore = create<Bet>()(
  persist(
    (set) => ({
      currentBet: 1,
      incrementOne: () =>
        set((state: Bet) => ({
          currentBet: state.currentBet === 5 ? 1 : state.currentBet + 1,
        })),
      setMaxBet: () =>
        set((state: Bet) => ({ currentBet: (state.currentBet = 5) })),
    }),
    {
      name: "currentBet",
    },
  ),
);
