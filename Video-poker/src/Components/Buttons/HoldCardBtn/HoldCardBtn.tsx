import "../btn.css";

import { useGameStore } from "../../../store/store";
import type { PlayingCard } from "../../../Types/Type";

type HoldCardBtnProps = {
  card: PlayingCard;
  //hold: boolean;
};

export default function ({ card }: HoldCardBtnProps) {
  const toggleHold = useGameStore((state) => state.toggleHold);
  console.log(card);
  function holdCard() {
    //useGameStore((state) => state.toggleHold(card));
    //const isHeld =
    //console.log(card.hold);
    console.log(card);

    // if (isHeld === false) {
    //   (e) => e.currentTarget((isHeld = true));
    // }
    //skal forandre hold til true på det kortet som tilhører knappen
  }

  return (
    <button type="button" onClick={holdCard}>
      <p>Hold card</p>
    </button>
  );
}
