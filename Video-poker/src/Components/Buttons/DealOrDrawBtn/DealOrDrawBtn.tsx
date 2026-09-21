import "../btn.css";
import { useBetStore, useTotalCoins } from "../../../store/store";

export default function DealOrDrawBtn() {
  const playersCoins = useTotalCoins((state) => state.playersCoins);
  const bet = useBetStore((state) => state.currentBet);
  const subtractCoins = useTotalCoins((state) => state.subtractCoins);

  function handleBet() {
    if (playersCoins >= bet) {
      subtractCoins(bet);
    }
  }

  return (
    <button type="button" onClick={handleBet}>
      <h2>Deal or Draw</h2>
    </button>
  );
}
