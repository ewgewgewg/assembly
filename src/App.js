import React, { useState, useEffect } from "react";
import "./App.css";
import displaySeq from "./display/displaySeq";
import rowTitle from "./display/rowTitle";
import updateTurn from "./updateTurn.js";
import newGame from "./newGame.js";
import getCards from "./getCards.js";

function App() {
  const [playerAPoints, setPlayerAPoints] = useState(0);
  const [playerBPoints, setPlayerBPoints] = useState(0);
  const [turn, setTurn] = useState([1, "A"]);
  const [playerADeck, setPlayerADeck] = useState(getCards(7));
  const [playerBDeck, setPlayerBDeck] = useState(getCards(7));
  const [playerAHand, setPlayerAHand] = useState(getCards(5));
  const [playerBHand, setPlayerBHand] = useState(getCards(5));
  const [playerALine, setPlayerALine] = useState([]);
  const [playerBLine, setPlayerBLine] = useState([]);
  const [playerAField, setPlayerAField] = useState([]);
  const [playerBField, setPlayerBField] = useState([]);

  const [readyAction, setReadyAction] = useState([]);

  useEffect(() => {
    setReadyAction([]);
  }, [turn]);

  const allLocations = {
    ADeck: [playerADeck, setPlayerADeck],
    BDeck: [playerBDeck, setPlayerBDeck],
    AHand: [playerAHand, setPlayerAHand],
    BHand: [playerBHand, setPlayerBHand],
    ALine: [playerALine, setPlayerALine],
    BLine: [playerBLine, setPlayerBLine],
    AField: [playerAField, setPlayerAField],
    BField: [playerBField, setPlayerBField],
    APoints: [playerAPoints, setPlayerAPoints],
    BPoints: [playerBPoints, setPlayerBPoints],
    Ready: [readyAction, setReadyAction],
  };

  return (
    <div className="App">
      <div className="header">
        <button onClick={() => updateTurn(turn, setTurn, allLocations)}>
          END TURN
        </button>
        <div className="stats">
          Assembly Card Game: Player A Points: {playerAPoints} || Player B
          Points: {playerBPoints} || Turn: {turn[0]} {turn[1]}
        </div>
        <button
          onClick={() =>
            newGame(
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
            )
          }
        >
          NEW GAME
        </button>
      </div>
      <div className="topHand mainRow">
        {rowTitle("Hand")}
        {displaySeq(
          playerBHand,
          setPlayerBHand,
          allLocations,
          "hand",
          "B",
          turn
        )}
      </div>
      <div className="topLine mainRow">
        {rowTitle("Line")}
        {displaySeq(
          playerBLine,
          setPlayerBLine,
          allLocations,
          "line",
          "B",
          turn
        )}
      </div>
      <div className="topField mainRow">
        {rowTitle("Field")}
        {displaySeq(
          playerBField,
          setPlayerBField,
          allLocations,
          "field",
          "B",
          turn
        )}
      </div>
      <div className="bottomField mainRow">
        {rowTitle("Field")}
        {displaySeq(
          playerAField,
          setPlayerAField,
          allLocations,
          "field",
          "A",
          turn
        )}
      </div>
      <div className="bottomLine mainRow">
        {rowTitle("Line")}
        {displaySeq(
          playerALine,
          setPlayerALine,
          allLocations,
          "line",
          "A",
          turn
        )}
      </div>
      <div className="bottomHand mainRow">
        {rowTitle("Hand")}
        {displaySeq(
          playerAHand,
          setPlayerAHand,
          allLocations,
          "hand",
          "A",
          turn
        )}
      </div>
    </div>
  );
}

export default App;
