export type Player = {
  id: string;
  name: string;
  coins: number;
};
// export type PlayerList = {
//   players: Player[];
// };

export type PlayingCard = {
  suit: string;
  rank: string;
  hold: boolean;
  //string på fordi jeg vil bruke tekst for å
  // lagre verdien på kortet pga A, K, Q og J
  // og fordi jeg ikks skal bruke dem som tallverdier.
};

export type PokerHand = {
  //alle hendene man kan få når man spiller poker
};

export type TableRewards = {
  hand: string;
  bet1: number;
  bet2: number;
  bet3: number;
  bet4: number;
  bet5: number;
};

export type handType =
  | "royalFlush"
  | "straightFlush"
  | "fourOfAKind"
  | "flush"
  | "straight"
  | "threeOfAKind"
  | "twoPair"
  | "jacksOrBetter"
  | "nothing";

// royal flush må ha 10, J, Q, K og A i samme suit
// flush alle kortene har samme suit,
// straight flush må ha 5 på rekke og samme farge
// straight er når det er 5 kort i rekkefølge
