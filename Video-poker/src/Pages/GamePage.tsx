import "../App.css";
import Game from "../Components/Game/Game";
import PayoutTable from "../Components/PayoutTable/PayoutTable";

export default function GamePage() {
  return (
    <main>
      <h1>Video Poker</h1>
      <PayoutTable />
      <Game />;
    </main>
  );
}
