// https://www.youtube.com/watch?v=ULS7LHNScHc

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Bet = {
  bet: number;
  incrementOne: () => void;
  setMaxBet: () => void;
};

export const useBet = create<Bet>((set) => ({
  bet: 1,
  incrementOne: () =>
    set((state: Bet) => ({
      bet: state.bet === 5 ? 1 : state.bet + 1,
    })),
  setMaxBet: () => set((state: Bet) => ({ bet: (state.bet = 5) })),
}));
