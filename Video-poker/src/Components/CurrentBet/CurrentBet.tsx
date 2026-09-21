import { useBetStore } from "../../store/store";

export default function CurrentBet() {
  const { currentBet } = useBetStore();
  return <h3>Current Bet: {currentBet}</h3>;
}
