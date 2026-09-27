import { PlayerStore } from "../../store/store";
import "./PlayerList.css";

export default function PlayerListContainer() {
  const list = PlayerStore.getState().playerList;
  console.log(list);

  return (
    <div className="player-list-container">
      <ul className="player-list">
        {list.map((player) => (
          <li key={player.id}>
            {player.name}: {player.coins} coins
          </li>
        ))}
      </ul>
    </div>
  );
}
