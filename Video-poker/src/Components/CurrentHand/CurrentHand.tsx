import "./CurrentHand.css";
import CardAndHoldBtnContainer from "../CardAndHoldBtnContainer/CardAndHoldBtnContainer";

export default function CurrentHand() {
  return (
    <div className="currentHand">
      <CardAndHoldBtnContainer />
      <CardAndHoldBtnContainer />
      <CardAndHoldBtnContainer />
      <CardAndHoldBtnContainer />
      <CardAndHoldBtnContainer />
    </div>
  );
}
