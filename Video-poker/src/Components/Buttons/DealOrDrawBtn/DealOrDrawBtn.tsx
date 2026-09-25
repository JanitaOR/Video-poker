import "../btn.css";
import { useGameStore } from "../../../store/store";

export default function DealOrDrawBtn() {
  const dealOrDraw = useGameStore((state) => state.dealOrDraw);

  return (
    <button type="button" onClick={dealOrDraw}>
      Deal or Draw
    </button>
  ); // denne ; må bort!!!!
}
