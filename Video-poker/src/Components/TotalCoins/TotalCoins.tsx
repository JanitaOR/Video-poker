import { useTotalCoins } from "../../store/store";

export default function TotalCoins() {
  const playersCoins = useTotalCoins((state) => state.playersCoins);

  return <h3>Total Coins: {playersCoins}</h3>;
}
