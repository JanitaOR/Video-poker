import "../btn.css";
import { useBetStore } from "../../../store/store";

export default function BetOneCoinBtn() {
  const { incrementOne } = useBetStore();
  return (
    <button type="button" onClick={incrementOne}>
      Bet 1
    </button>
  );
}
