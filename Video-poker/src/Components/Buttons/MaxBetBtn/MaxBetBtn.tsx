import "../btn.css";
import { useBetStore } from "../../../store/store";

export default function MaxBetBtn() {
  const { setMaxBet } = useBetStore();

  return (
    <button type="button" onClick={setMaxBet}>
      Max Bet
    </button>
  ); //får ikke bort denne!!!!!!
}
