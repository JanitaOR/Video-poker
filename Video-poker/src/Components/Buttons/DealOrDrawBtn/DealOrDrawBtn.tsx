import "../btn.css";
import {
  useBetStore,
  useDeckStore,
  useGameStore,
  useTotalCoins,
} from "../../../store/store";

export default function DealOrDrawBtn() {
  // const dealCards = useDeckStore((state) => state.dealCards);

  // const playersCoins = useTotalCoins((state) => state.playersCoins);
  // const bet = useBetStore((state) => state.currentBet);
  // const subtractCoins = useTotalCoins((state) => state.subtractCoins);

  // const shuffledDeck = useDeckStore((state) => state.shuffleDeck);

  const dealOrDraw = useGameStore((state) => state.dealOrDraw);

  return (
    <button type="button" onClick={dealOrDraw}>
      <h2>Deal or Draw</h2>
    </button>
  );
}

//  function deal() {
//     dealCards(5); //her gir jeg amount verdien i drawCards funksjonen 5.
//   }

//   function handleDeal() {
//     if (playersCoins >= bet) {
//       subtractCoins(bet);
//       shuffledDeck(); //shufler kortstokken
//       deal(); // trekker 5 kort
//     }
//   }
