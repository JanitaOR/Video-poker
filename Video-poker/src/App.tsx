import "./App.css";
import NewPlayer from "./Components/NewPlayer/NewPlayer";
import PlayerList from "./Components/PlayerList/PlayerList";

export default function App() {
  return (
    <main>
      <h1>Welcome to Video Poker</h1>
      <NewPlayer />
      <h2>Players</h2>
      <PlayerList />
    </main>
  );
}
