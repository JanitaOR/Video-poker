import "../btn.css";

import { useClassStore, useGameStore } from "../../../store/store";
import type { PlayingCard } from "../../../Types/Type";

type HoldCardBtnProps = {
  card: PlayingCard;
  //hold: boolean;
};

export default function ({ card }: HoldCardBtnProps) {
  //const toggleHold = useGameStore((state) => state.toggleHold);

  const classHold = useClassStore((state) => state.classNameHold);
  const changeClass = useClassStore((state) => state.changeClassHold);
  console.log(card);
  function holdCard() {
    console.log(card);
    //console.log(card.hold);

    useGameStore.getState().toggleHold(card);

    const holdClass = changeClass;

    console.log(classHold);
  }

  return (
    <button type="button" onClick={holdCard}>
      <p>Hold card</p>
    </button>
  );
}
