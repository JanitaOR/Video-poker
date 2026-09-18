import "../btn.css";
import { useBet } from "../../../store/store";

export default function BetOneCoinBtn() {
  const { incrementOne } = useBet();
  return (
    <button type="button" onClick={incrementOne}>
      <h2>Bet 1</h2>
    </button>
  );
}
