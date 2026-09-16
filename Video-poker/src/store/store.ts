import { create } from "zustand";

type Bet = {
  startBet: number;
};

export const useBet = create((set) => ({
  bet: 1,
  incrementOne: () => set((state: Bet) => ({ bet: state.startBet + 1 })),
  setBet: () => set((state: Bet) => ({ bet: (state.startBet = 5) })),
}));
