const drawCard = (allLocations, side) => {
  const deck = allLocations[side + "Deck"][0];
  if (!deck.length) return;
  const movedCard = deck.shift();
  const hand = allLocations[side + "Hand"][0];
  allLocations[side + "Deck"][1](deck);
  allLocations[side + "Hand"][1]([movedCard, ...hand]);
};

export default drawCard;
