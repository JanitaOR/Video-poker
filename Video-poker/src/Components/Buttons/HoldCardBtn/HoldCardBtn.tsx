// https://react.dev/learn/conditional-rendering

import "../btn.css";

import type { PlayingCard } from "../../../Types/Type";
import { useGameStore } from "../../../store/store";

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
      Hold card
    </button>
  );
}
