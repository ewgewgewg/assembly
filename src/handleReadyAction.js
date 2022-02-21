const handleReadyAction = (allLocations, layer, side, index, setSelected) => {
  if (!allLocations.Ready[0].length) return;
  const [type, sourceSide, sourceIndex, sourceLayer, setHasActed] =
    allLocations.Ready[0];

  if (sourceSide === side && sourceIndex === index && sourceLayer === layer) {
    setSelected(false);
    allLocations.Ready[1]([]);
    return;
  }

  const action = allLocations.Ready[0][0];
  if (action === "attack") {
    //can only attack same layer of opposite side
    if (layer !== sourceLayer || side === sourceSide) return;

    const attackerIndex = sourceIndex;
    const attackerSide = sourceSide;
    const attackerField = allLocations[attackerSide + "Field"][0];
    const attacker = attackerField[attackerIndex];
    const attackerPower = attacker.strength;

    const defenderField = allLocations[side + "Field"][0];
    const defender = defenderField[index];
    const defenderPower = defender.strength;

    if (attackerPower > defenderPower) {
      const newDefenderField = defenderField
        .slice(0, index)
        .concat(defenderField.slice(index + 1));
      allLocations[side + "Field"][1](newDefenderField);
      const attackerSetHasActed = allLocations.Ready[0][4];
      attackerSetHasActed(true);
    } else if (attackerPower === defenderPower) {
      const newDefenderField = defenderField
        .slice(0, index)
        .concat(defenderField.slice(index + 1));
      allLocations[side + "Field"][1](newDefenderField);
      const newAttackerField = attackerField
        .slice(0, attackerIndex)
        .concat(attackerField.slice(attackerIndex + 1));
      allLocations[attackerSide + "Field"][1](newAttackerField);
    } else {
      const newAttackerField = attackerField
        .slice(0, attackerIndex)
        .concat(attackerField.slice(attackerIndex + 1));
      allLocations[attackerSide + "Field"][1](newAttackerField);
    }
  }
  allLocations.Ready[1]([]);
};

export default handleReadyAction;
