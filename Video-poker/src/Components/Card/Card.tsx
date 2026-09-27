import type { PlayingCard } from "../../Types/Type.tsx";
import "./Card.css";

//jeg velger å legge både bakside og forside av kortet i
//samme komponent fordi jeg syns det blir enklere å holde styr på.
// og mindre kode fordi det blir færre komponenter.

//evt Card har logikken og CardFront og CardBack har utseendet?

//export default function Card(card: PlayingCard) {
//export default function Card(suit: string, rank: string) {
export default function CardComponent({ suit, rank, hold }: PlayingCard) {
  console.log(suit, rank, hold);

  function holdClass() {
    console.log(hold);
    if (hold === false) {
      return "no-hold";
    }
    return "hold";
  }

  return (
    <div>
      <div className="card back hidden"></div>
      <div className={`card front ${holdClass()}`}>
        <div className="suit-left-up">
          <p className="suit">{suit}</p>
        </div>
        <div className="rank-container">
          <p className="rank">{rank}</p>
        </div>
        <div className="suit-right-down">
          <p className="suit">{suit}</p>
        </div>
      </div>
    </div>
  );
}
