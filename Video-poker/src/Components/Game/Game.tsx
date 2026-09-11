import BetOneCoinBtn from "../Buttons/BetOneCoinBtn/BetOneCoinBtn";
import DealOrDrawBtn from "../Buttons/DealOrDrawBtn/DealOrDrawBtn";
import MaxBetBtn from "../Buttons/MaxBetBtn/MaxBetBtn";
import CurrentBet from "../CurrentBet/CurrentBet";
import CurrentHand from "../CurrentHand/CurrentHand";
import TotalCoins from "../TotalCoins/TotalCoins";

export default function Game() {
  return (
    <>
      <CurrentHand />
      <div>
        <CurrentBet />
        <TotalCoins />
      </div>
      <div>
        <BetOneCoinBtn />
        <MaxBetBtn />
        <DealOrDrawBtn />
      </div>
    </>
  );
}
