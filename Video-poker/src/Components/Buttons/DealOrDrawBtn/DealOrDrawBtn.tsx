import "../btn.css";
import { useBetStore, useDeckStore, useTotalCoins } from "../../../store/store";

export default function DealOrDrawBtn() {
  const dealCards = useDeckStore((state) => state.dealCards);

  const playersCoins = useTotalCoins((state) => state.playersCoins);
  const bet = useBetStore((state) => state.currentBet);
  const subtractCoins = useTotalCoins((state) => state.subtractCoins);

  const shuffledDeck = useDeckStore((state) => state.shuffleDeck);

  function deal() {
    dealCards(5); //her gir jeg amount verdien i drawCards funksjonen 5.
  }

  function handleDeal() {
    if (playersCoins >= bet) {
      subtractCoins(bet);
      shuffledDeck(); //shufler kortstokken
      deal(); // trekker 5 kort
    }
  }

  return (
    <button type="button" onClick={handleDeal}>
      <h2>Deal or Draw</h2>
    </button>
  );
}
