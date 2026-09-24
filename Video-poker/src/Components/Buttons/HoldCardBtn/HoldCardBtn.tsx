import "../btn.css";

import { useGameStore } from "../../../store/store";

export default function HoldCardBtn(hold: boolean) {
  hold = false;
  function holdCard() {
    useGameStore.getState().toggleHold;
    if (isHeld === false) {
      (e) => e.currentTarget((isHeld = true));
    }
    //skal forandre hold til true
  }

  return (
    <button type="button" onClick={holdCard}>
      <p>Hold card</p>
    </button>
  );
}
