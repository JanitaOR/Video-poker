import "../btn.css";
import { useGameStore } from "../../../store/store";

export default function DealOrDrawBtn() {
  const dealOrDraw = useGameStore((state) => state.dealOrDraw);
  const toggleHeld = useGameStore((state) => state.toggleHeld);
  const gamePhase = useGameStore((state) => state.gamePhase);
  function gameState() {
    if (gamePhase === "waiting") {
      dealOrDraw();
    }
    if (gamePhase === "holding") {
      toggleHeld();
    }
  }

  return (
    <button type="button" onClick={gameState}>
      Deal or Draw
    </button>
  ); // denne ; må bort!!!!
}
