import "./Card.css";

export default function Card() {
  return (
    <div>
      <div className="card back hidden"></div>
      <div className="card front">
        <div>
          <p className="suit">❤️</p>
        </div>
        <div>
          <p className="rank">1</p>
        </div>
        <div>
          <p className="suit">❤️</p>
        </div>
      </div>
    </div>
  );
}
