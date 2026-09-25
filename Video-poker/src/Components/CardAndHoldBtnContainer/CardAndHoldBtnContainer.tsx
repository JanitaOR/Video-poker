import "./CardAndHoldBtnContainer.css";
import HoldCardBtn from "../Buttons/HoldCardBtn/HoldCardBtn";
import CardComponent from "../Card/Card";

import type { PlayingCard } from "../../Types/Type";

type CardAndHoldBtnContainerProps = {
  card: PlayingCard;
};
// type HoldCardBtnProps = {
//   hold: boolean;
// };

export default function CardAndHoldBtnContainer(
  { card }: CardAndHoldBtnContainerProps,
  //{ hold }: HoldCardBtnProps,
) {
  return (
    <div className="card-btn-container">
      <CardComponent suit={card.suit} rank={card.rank} hold={card.hold} />
      <HoldCardBtn suit={card.suit} rank={card.rank} hold={card.hold} />;
    </div>
  );
}
