const handleReadyAction = (allLocations, layer, side, index) => {
  if (!allLocations.Ready[0].length) return;
  const action = allLocations.Ready[0][0];
  if (action === "attack") {
    const attackerIndex = allLocations.Ready[0][2];
    const attackerSide = side === "A" ? "B" : "A";
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
