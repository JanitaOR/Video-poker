import "../btn.css";

import { useGameStore } from "../../../store/store";
import type { PlayingCard } from "../../../Types/Type";

type HoldCardBtnProps = {
  card: PlayingCard;
  //hold: boolean;
};

export default function ({ card }: HoldCardBtnProps) {
  //const toggleHold = useGameStore((state) => state.toggleHold);
  console.log(card);
  function holdCard() {
    console.log(card);
    //console.log(card.hold);

    useGameStore.getState().toggleHold(card);
  }

  return (
    <button type="button" onClick={holdCard}>
      <p>Hold card</p>
    </button>
  );
}
