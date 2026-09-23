import "./CardAndHoldBtnContainer.css";
import HoldCardBtn from "../Buttons/HoldCardBtn/HoldCardBtn";
import Card from "../Card/Card";
import type { PlayingCard } from "../../Types/Type";

type CardAndHoldBtnContainerProps = {
  card: PlayingCard;
};

export default function CardAndHoldBtnContainer({
  card,
}: CardAndHoldBtnContainerProps) {
  return (
    <div className="card-btn-container">
      <Card suit={card.suit} rank={card.rank} />
      <HoldCardBtn />
    </div>
  );
}
