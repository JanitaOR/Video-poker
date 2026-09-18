import { useBet } from "../../store/store";

export default function CurrentBet() {
  const { bet } = useBet();
  return <h3>Current Bet: {bet}</h3>;
}
