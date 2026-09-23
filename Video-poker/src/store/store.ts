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

type DeckState = {
  deck: PlayingCard[];
  hand: PlayingCard[];
  //heldCards: PlayingCard[];
  //discardedCards: PlayingCard[];

  shuffleDeck: () => void;
  dealCards: (amount: number) => void;
};

export const useDeckStore = create<DeckState>()(
  persist(
    (set) => ({
      deck: cardDeck, //kortstokken
      hand: [], //ett tomt array hvor de 5 kortene som trekkes legges.

      //Fisher-Yates-algoritmen - gir hvert kort en rettferdig sjanse til å hhavne på hver plass

      shuffleDeck: () =>
        set((state) => {
          const shuffled = [...state.deck]; //kopi av arrayet

          for (let i = shuffled.length - 1; i > 0; i--) {
            //i blir index i arrayet av kort - 1, her blir dette 51.

            const randomIndex = Math.floor(Math.random() * (i + 1)); //Math.random gir et tilfeldig tall mellom 0 og 1 , f.eks 0.73 (0.73 * 51 = 37,23 Math.floor runder dette ned til 37.)

            [shuffled[i], shuffled[randomIndex]] = [
              shuffled[randomIndex],
              shuffled[i],
            ];
            // i = 51, randomIndex = 37, dette sier at kortet/verdien som ligger på [i = 37] byttet plass med [randomIndex = 51]
            // [51, 37] = [37, 51]

            //andre runde blir i = 50 (pga i--), og sånn fortsetter det til
            // kortstokken er gått igjennom av denne for-loopen
            // og gir en shufflet kortstokk.
          }
          return {
            deck: shuffled,
          };
        }),
      dealCards: (amount) =>
        set((state) => {
          const drawCards = state.deck.slice(0, amount); // hent kort fra index 0 til amount(hvis man setter 5 her, så tas kortene fra index0-4(5 kort)) og legger disse i drawCards)

          return {
            deck: state.deck.slice(amount),
            hand: drawCards,
          };
        }),
    }),
    {
      name: "shuffled-deck",
    },
  ),
);

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
