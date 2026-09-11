import "./CardAndHoldBtnContainer.css";
import HoldCardBtn from "../Buttons/HoldCardBtn/HoldCardBtn";
import Card from "../Card/Card";

export default function CardAndHoldBtnContainer() {
  return (
    <div className="card-btn-container">
      <Card />
      <HoldCardBtn />
    </div>
  );
}
