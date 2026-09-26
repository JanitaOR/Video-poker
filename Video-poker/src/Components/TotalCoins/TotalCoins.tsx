import { useTotalCoins, useBetStore } from "../../store/store";

export default function TotalCoins() {
  const playersCoins = useTotalCoins((state) => state.playersCoins);
  //const bet = useBetStore((state) => state.currentBet);
  //const subtractCoins = useTotalCoins((state) => state.subtractCoins);

  //function handleBet() {
  //if (playersCoins >= bet) {
  //  subtractCoins(bet);
  // }
  //}

  return <h3>Total Coins: {playersCoins}</h3>;
}
