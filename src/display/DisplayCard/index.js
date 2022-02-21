import { useState, useEffect } from "react";
import "./DisplayCard.css";
import deployFromHand from "../../deployFromHand";
import scorePoint from "../../scorePoint";
import handleReadyAction from "../../handleReadyAction";
import readyAction from "../../readyAction";

const DisplayCard = ({ source, allLocations, layer, side, index, turn }) => {
  const [hasActed, setHasActed] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setHasActed(false);
  }, [turn]);

  useEffect(() => {
    const readied = allLocations.Ready[0];
    if (!readied) setSelected(false);
    else if (
      readied[1] === side &&
      readied[2] === index &&
      readied[3] === layer
    )
      setSelected(true);
    else setSelected(false);
  }, [allLocations, side, index, layer]);

  const clickableMenu = {
    hand: [
      <button
        className="menu-button"
        key="menu1"
        onClick={() => deployFromHand(source, allLocations, side, index)}
      >
        Deploy to Line
      </button>,
    ],
    field: [
      <button
        className="menu-button"
        key="menu1"
        onClick={() => scorePoint(allLocations, hasActed, setHasActed, side)}
      >
        Build
      </button>,
      <button
        className="menu-button"
        key="menu2"
        onClick={() =>
          readyAction(
            allLocations,
            "attack",
            side,
            index,
            layer,
            hasActed,
            setHasActed
          )
        }
      >
        Battle
      </button>,
    ],
  };

  const showOnHover = clickableMenu[layer];

  return (
    <div className="card-with-dropdown" key={`card${index}`}>
      <button
        className={`basic-card ${selected && "selected"}`}
        onClick={() => handleReadyAction(allLocations, layer, side, index, setSelected)}
      >
        {layer === "line" && <div>[{`${index + 1}`}]</div>}
        {layer === "field" && hasActed && <div className="has-acted">A</div>}
        <div>{source.name}</div>
        <div>{source.type}</div>
        <div>{source.strength}</div>
      </button>
      {turn[1] === side && <div className="dropdown">{showOnHover}</div>}
    </div>
  );
};

export default DisplayCard;
