export type Player = {
  id: string;
  name: string;
  coins: number;
};

export type PlayingCard = {
  suit: string;
  rank: string;
  //string fordi jeg vil bruke tekst for å
  // lagre verdien på kortet pga A, K, Q og J
  // og fordi jeg ikks skal bruke dem som tallverdier.
};
export type Card = {
  card: PlayingCard;
  hold: boolean;
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
