import "../btn.css";
import { useBet } from "../../../store/store";

export default function MaxBetBtn() {
  const { setMaxBet } = useBet();
  return (
    <button type="button" onClick={setMaxBet}>
      <h2>Max Bet</h2>
    </button>
  );
}
