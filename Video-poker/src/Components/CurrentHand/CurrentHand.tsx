import "./CurrentHand.css";
import CardAndHoldBtnContainer from "../CardAndHoldBtnContainer/CardAndHoldBtnContainer";
import { useGameStore } from "../../store/store";
//import { useDeckStore } from "../../store/store";

export default function CurrentHand() {
  //const hand = useDeckStore((state) => state.hand);

  const hand = useGameStore((state) => state.hand);

  return (
    <div className="currentHand">
      {hand.map((card) => (
        <CardAndHoldBtnContainer
          key={`${card.suit}-${card.rank}`}
          card={card}
        />
      ))}
    </div>
  );
}
