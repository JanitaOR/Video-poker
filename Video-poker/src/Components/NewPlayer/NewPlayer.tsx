import { PlayerStore } from "../../store/store";
import "./NewPlayer.css";
import "../Buttons/btn.css";

export default function NewPlayer() {
  //const NewPlayer = PlayerStore.getState().NewPlayer();
  function handleNewPlayerForm(formData: FormData) {
    const newPlayer = formData.get("player-name");
    if (newPlayer !== "") {
      PlayerStore.getState().NewPlayer(newPlayer);
      console.log(newPlayer);
      window.location.reload();
    }
  }
  return (
    <form action={handleNewPlayerForm} className="new-player-form">
      <label htmlFor="player-name">New player name</label>
      <input type="text" id="name" name="player-name" />
      <button type="submit">Register new player</button>
    </form>
  );
}
