import { create } from "zustand";

type Bet = {
  startBet: number;
};

export const useBet: Bet = create((set) => ({
  startBet: 1,
  incrementOne: () => set((state: Bet) => ({ bet: state.startBet + 1 })),
  setBet: () => set((state: Bet) => ({ bet: (state.startBet = 5) })),
}));
