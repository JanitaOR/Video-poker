import "./Card.css";

//jeg velger å legge både bakside og forside av kortet i
//samme komponent fordi jeg syns det blir enklere å holde styr på.
// og mindre kode fordi det blir færre komponenter.

//evt Card har logikken og CardFront og CardBack har utseendet?

export default function Card() {
  return (
    <div>
      <div className="card back hidden"></div>
      <div className="card front">
        <div className="suit-left-up">
          <p className="suit">❤️</p>
        </div>
        <div className="rank-container">
          <p className="rank">1</p>
        </div>
        <div className="suit-right-down">
          <p className="suit">❤️</p>
        </div>
      </div>
    </div>
  );
}
