import { useBet } from "../../store/store";

export default function CurrentBet() {
  const currentBet = useBet();
  return <h3>Current Bet: </h3>;
}
