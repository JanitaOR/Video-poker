import { PlayerStore } from "../../store/store";
import "./NewPlayer.css";

export default function NewPlayer() {
  //const NewPlayer = PlayerStore.getState().NewPlayer();
  function handleNewPlayerForm(formData: FormData) {
    const newPlayer = formData.get("player-name");
    if (newPlayer !== "") {
      PlayerStore.getState().NewPlayer(newPlayer);
      console.log(newPlayer);
    }
  }
  return (
    <form action={handleNewPlayerForm}>
      <label htmlFor="player-name">New player</label>
      <input type="text" id="name" name="player-name" />
      <button type="submit">register new player</button>
    </form>
  );
}
