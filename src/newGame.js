import getCards from "./getCards";

const newGame = (
  setPlayerAPoints,
  setPlayerBPoints,
  setTurn,
  setPlayerADeck,
  setPlayerBDeck,
  setPlayerAHand,
  setPlayerBHand,
  setPlayerALine,
  setPlayerBLine,
  setPlayerAField,
  setPlayerBField
) => {
  setPlayerAPoints(0);
  setPlayerBPoints(0);
  setTurn([1, "A"]);
  setPlayerADeck(getCards(7));
  setPlayerBDeck(getCards(7));
  setPlayerAHand(getCards(5));
  setPlayerBHand(getCards(5));
  setPlayerALine([]);
  setPlayerBLine([]);
  setPlayerAField([]);
  setPlayerBField([]);
};

export default newGame;
