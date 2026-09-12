import "../btn.css";

export default function DealOrDrawBtn() {
  function alertMe() {
    alert("deal er trykket");
  }
  return (
    <button onClick={alertMe}>
      <h2>Deal or Draw</h2>
    </button>
  );
}
