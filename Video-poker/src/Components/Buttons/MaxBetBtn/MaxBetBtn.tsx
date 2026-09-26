import "../btn.css";
import { useBetStore } from "../../../store/store";

export default function MaxBetBtn() {
  const { setMaxBet } = useBetStore();
  return (
    <button type="button" onClick={setMaxBet}>
      <h2>Max Bet</h2>
    </button>
  );
}
