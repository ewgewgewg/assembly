import cards from "./assets/cards";
import random from "./utils/random";

const getCards = (n) => {
  const selected = [];
  for (let i = 0; i < n; i++) {
    selected.push(cards[random(cards.length)]);
  }
  return selected;
};

export default getCards;
