export type PlayingCard = {
  suit: string;
  rank: string;
  //string fordi jeg vil bruke tekst for å lagre verdien på kortet pga A, K, Q og J.
};
export type Card = {
  card: PlayingCard;
  hold: boolean;
};
