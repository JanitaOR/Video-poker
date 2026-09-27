// https://www.youtube.com/watch?v=ULS7LHNScHc
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID

import { create } from "zustand";
import { persist } from "zustand/middleware";

//DATA:

//currentPlayer
//selectPlayer

//gamePhase - waiting, holding, finished

//calculatePayout
//finishRound
import type { Player } from "../Types/Type";
import type { PlayingCard } from "../Types/Type";
import { cardDeck, startCoinValue } from "../Data/Data";

type Bet = {
  currentBet: number;
  incrementOne: () => void;
  setMaxBet: () => void;
};

type TotalCoins = {
  playersCoins: number;
  subtractCoins: (amount: number) => void;
};

type GamePhase = "waiting" | "holding" | "finished"; // union type

type GameState = {
  gamePhase: GamePhase;

  deck: PlayingCard[];
  hand: PlayingCard[];

  heldCards: PlayingCard[];
  hold: boolean;
  discardedCards: PlayingCard[];

  dealOrDraw: () => void;
  toggleHeld: () => void;
  toggleHold: (card: PlayingCard) => void;
  finishGame: () => void;
};

type PlayerListState = {
  playerList: Player[];
  NewPlayer: (playerName: string) => void;
  //CurrentPlayer: () => void;
};

export const PlayerStore = create<PlayerListState>()(
  persist(
    (set) => ({
      playerList: [],

      /**
       *
       * @param playerName input value fra NewPlayer komponenten
       */
      NewPlayer: (playerName: string) => {
        const newPlayer: Player = {
          id: crypto.randomUUID(),
          name: playerName,
          coins: startCoinValue,
        };

        set((state) => ({
          playerList: [...state.playerList, newPlayer],
        }));
      },
    }),

    {
      name: "players",
    },
  ),
);

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      gamePhase: "waiting",

      deck: cardDeck,
      hand: [],
      heldCards: [],
      hold: false,
      discardedCards: [],

      /**
       *
       * @returns hvilke spillfase spillet er i,
       * en ny shuflet kortstokk, hand med 5 kort,
       * kortstokk som disse er tatt i fra.
       */

      dealOrDraw: () =>
        // sette på persist etter at logikken er ferdig.
        set((state) => {
          if (state.gamePhase === "waiting") {
            //hvor mye er satset
            const currentBet = useBetStore.getState().currentBet;
            const subtractCoins = useTotalCoins.getState().subtractCoins;

            subtractCoins(currentBet);

            //shuffel deck
            //når jeg bruker useDeckStore.getState().shuffleDeck(); for å hente data, så kjører shuffleDeck() funksjonen, shuffleDeck (uten()) henter funksjonen

            const shuffled = [...state.deck]; //kopi av arrayet

            for (let i = shuffled.length - 1; i > 0; i--) {
              //i blir index i arrayet av kort - 1, her blir dette 51.

              const randomIndex = Math.floor(Math.random() * (i + 1)); //Math.random gir et tilfeldig tall mellom 0 og 1 , f.eks 0.73 (0.73 * 51 = 37,23 Math.floor runder dette ned til 37.)

              [shuffled[i], shuffled[randomIndex]] = [
                shuffled[randomIndex],
                shuffled[i],
              ];
            }
            //trekk 5 kort
            const numberOfCards = 5;
            const drawCards = shuffled.slice(0, numberOfCards); // hent kort fra index 0 til 5, kortene fra index0-4(5 kort)) og legger disse i drawCards)

            const remainingCards = shuffled.slice(numberOfCards);
            const shuffleDeck = shuffled;

            console.log(currentBet, shuffleDeck, drawCards, remainingCards);
            return {
              gamePhase: "holding",
              shuffledDeck: shuffleDeck,
              deck: remainingCards,
              hand: drawCards,
            };
          }
          return state;
        }),

      /**
       *
       * @param card hvilket suit, rank  og holdstatus kortet som trykkes på har
       * @returns forandrer hold til true eller false
       * og oppdaterer med ny holdstatus
       */

      toggleHold: (card) =>
        set((state) => {
          const newHand = state.hand.map((cardInHand) => {
            //hvis vediene i card har sammme verdier som cardInHand, toggle hold.
            if (
              cardInHand.suit === card.suit &&
              cardInHand.rank === card.rank
            ) {
              return { ...cardInHand, hold: !cardInHand.hold };
            }
            return cardInHand;
          });
          return { hand: newHand };
        }),

      /**
       *
       * @returns oppdatterer gamePhase status "finished",
       * legger den nye hånda i hand, kort uten
       * hold i discardedCards og resten av
       * kortstokken etter å ha trekt nye kort i deck.
       */

      toggleHeld: () =>
        set((state) => {
          if (state.gamePhase === "holding") {
            //finn kort med hold:false og putt kortene med hold i discardedCards[]
            const discardedCards = state.hand.filter(
              (card) => card.hold === false,
            );
            console.log(discardedCards);

            // trekk nye kort for disse kortene
            const numberOfCardToDraw = discardedCards.length;

            const newCards = state.deck.slice(0, numberOfCardToDraw);
            const remainingCards = state.deck.slice(numberOfCardToDraw);

            const newHand = state.hand.map((card) => {
              if (card.hold === false) {
                const newCard = newCards.shift();

                if (newCard !== undefined) {
                  return newCard;
                }
              }
              return card;
            });
            console.log(newHand);

            return {
              gamePhase: "finished",
              hand: newHand,
              deck: remainingCards,
              discardedCards: discardedCards,
            };
          }

          return state;
        }),
      //siste fase i spillet
      finishGame: () => ({
        //skjekker gevinst
        //legger til gevinst i totalCoins
        //forandrer gamePhase til waiting
      }),
    }),
    {
      name: "gamePhase",
    },
  ),
);

export const useTotalCoins = create<TotalCoins>()(
  persist(
    (set) => ({
      playersCoins: startCoinValue, // byttes ved skifte av spiller?

      /**
       *
       * @param amount hva spilleren satser
       * @returns det som er igjen i totalCoins
       * etter at satsen er satt.
       */

      subtractCoins: (amount) =>
        set((state) => ({
          playersCoins: state.playersCoins - amount,
        })),
    }),
    {
      name: "totalCoins",
    },
  ),
);

export const useBetStore = create<Bet>()(
  persist(
    (set) => ({
      currentBet: 1,

      /**
       *
       * @returns hvor mye spilleren satser,
       * ved å gå opp 1 coin for hver trykk opp
       * til 5 før den går ned til 1 igjen.
       */

      incrementOne: () =>
        set((state: Bet) => ({
          currentBet: state.currentBet === 5 ? 1 : state.currentBet + 1,
        })),

      /**
       *
       * @returns spiller satser 5 coins,
       * uansett hva den var før dette.
       */

      setMaxBet: () =>
        set((state: Bet) => ({ currentBet: (state.currentBet = 5) })),
    }),
    {
      name: "currentBet",
    },
  ),
);
