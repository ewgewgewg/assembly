import drawCard from "./drawCard";

const updateTurn = (turn, setTurn, allLocations) => {
  if (turn[1] === "A") {
    drawCard(allLocations, "B");
    const lineCards = allLocations["ALine"][0];
    if (!lineCards.length) return setTurn([turn[0], "B"]);
    const movedCard = lineCards.shift();
    const fieldCards = allLocations["AField"][0];
    allLocations["ALine"][1](lineCards);
    allLocations["AField"][1]([movedCard, ...fieldCards]);
    setTurn([turn[0], "B"]);
  } else {
    drawCard(allLocations, "A");
    const lineCards = allLocations["BLine"][0];
    if (!lineCards.length) return setTurn([turn[0] + 1, "A"]);
    const movedCard = lineCards.shift();
    const fieldCards = allLocations["BField"][0];
    allLocations["BLine"][1](lineCards);
    allLocations["BField"][1]([movedCard, ...fieldCards]);
    setTurn([turn[0] + 1, "A"]);
  }
};

export default updateTurn;
