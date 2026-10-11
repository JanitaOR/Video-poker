import "../btn.css";
import { useGameStore } from "../../../store/store";

export default function DealOrDrawBtn() {
  const dealOrDraw = useGameStore((state) => state.dealOrDraw);
  const toggleHeld = useGameStore((state) => state.toggleHeld);
  const finishGame = useGameStore((state) => state.finishGame);
  const gamePhase = useGameStore((state) => state.gamePhase);
  function gameState() {
    if (gamePhase === "waiting") {
      console.log("waiting");
      dealOrDraw();
    }
    if (gamePhase === "holding") {
      console.log("holding");
      toggleHeld();
    }
    if (gamePhase === "finished") {
      console.log("Finished");
      finishGame();
    }
  }

  return (
    <button type="button" onClick={gameState}>
      Deal or Draw
    </button>
  ); // denne ; må bort!!!!
}
