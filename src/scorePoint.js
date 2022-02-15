const scorePoint = (allLocations, hasActed, setHasActed, side) => {
  if (hasActed) {
    return alert("This card has already acted this turn!");
  }
  allLocations[side + "Points"][1](allLocations[side + "Points"][0] + 1);
  setHasActed(true);
};

export default scorePoint;
