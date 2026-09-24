import "../btn.css";
import {
  useBetStore,
  //useDeckStore,
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

  const toggleHeld = useGameStore((state) => state.toggleHeld);

  function phase(gamePhase) {
    if (
      gamePhase === "waiting"
      //hvis gamePhase er waiting
    ) {
      dealOrDraw();
    }
    if (
      gamePhase === "holding"
      //hvis gamePhase er holding
    ) {
      toggleHeld();
    }
  }

  return (
    <button type="button" onClick={phase}>
      Deal or Draw
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
