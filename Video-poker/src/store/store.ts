// https://www.youtube.com/watch?v=ULS7LHNScHc

import { create } from "zustand";
import { persist } from "zustand/middleware";

//import { Player } from "../Types/Player";

//DATA:
//currentBet
//players
//currentPlayer
//deck
//hand
//dicardedCards
//gamePhase - waiting, holding, finished

//ACTIONS
//curentPlayer
//selectPlayer

//increaseBet
//setMaxBet

//deal
//toggleHold
//draw

//calculatePayout
//finishRound

type Bet = {
  currentBet: number;
  incrementOne: () => void;
  setMaxBet: () => void;
};

type TotalCoins = {
  playersCoins: number;
  subtractCoins: (amount: number) => void;
};

export const useTotalCoins = create<TotalCoins>()(
  persist(
    (set) => ({
      playersCoins: 100,
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
