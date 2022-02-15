const readyAction = (
  allLocations,
  type,
  sourceSide,
  sourceIndex,
  sourceLayer,
  hasActed,
  setHasActed
) => {
  if (hasActed) {
    return alert("This card has already acted this turn!");
  }
  if (type === "attack") {
    allLocations.Ready[1]([
      type,
      sourceSide,
      sourceIndex,
      sourceLayer,
      setHasActed,
    ]);
  }
};

export default readyAction;
