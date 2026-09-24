import "./CardAndHoldBtnContainer.css";
import HoldCardBtn from "../Buttons/HoldCardBtn/HoldCardBtn";
import CardComponent from "../Card/Card";

import type { PlayingCard } from "../../Types/Type";

type CardAndHoldBtnContainerProps = {
  card: PlayingCard;
  //holdCard: Card;
};

export default function CardAndHoldBtnContainer({
  card,
}: CardAndHoldBtnContainerProps) {
  return (
    <div className="card-btn-container">
      <CardComponent suit={card.suit} rank={card.rank} hold={card.hold} />
      <HoldCardBtn />
    </div>
  );
}
