const deployFromHand = (source, allLocations, side, index) => {
  const handCards = allLocations[side + "Hand"][0];
  const movedCard = handCards[index];
  const lineCards = allLocations[side + "Line"][0];
  const newHandCards = handCards
    .slice(0, index)
    .concat(handCards.slice(index + 1));
  const newLineCards = [...lineCards, movedCard];
  allLocations[side + "Hand"][1](newHandCards);
  allLocations[side + "Line"][1](newLineCards);
};

export default deployFromHand;
