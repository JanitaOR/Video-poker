import { useState } from "react";
import "./App.css";
import { cardDeck } from "./Data/Data";
import Card from "./Components/Card/Card";
import type { PlayingCard } from "./Types/Type.tsx";

export default function App() {
  //dette skal i currentHand komponenten tror jeg.
  const [gameDeck, setGameDeck] = useState(cardDeck);
  const [playerHand, setPlayerHand] = useState<PlayingCard[]>([]);

  function randomCardFromDeck() {
    console.log(cardDeck);

    //Index fungerer her fordi selv om den verdien som er på denne
    // indexen forandres, så fjernes den forrige verdien fra
    // cardDeck og dermed er det ingen konflikt med å kunne
    // få det samme kortet igjen

    const randomIndex = Math.floor(Math.random() * gameDeck.length);
    const card = gameDeck[randomIndex];

    const newDeck = gameDeck.filter((_, index) => index !== randomIndex);
    setGameDeck(newDeck);

    console.log(card);
    console.log(newDeck);

    setPlayerHand((currentHand) => [...currentHand, card]);
    console.log(playerHand);
  }

  return (
    <main>
      <h1>Welcome to Video Poker</h1>

      <button onClick={randomCardFromDeck}>Get a card</button>
      {playerHand.map((playerHand) => (
        <Card {...playerHand} />
      ))}
    </main>
  );
}
