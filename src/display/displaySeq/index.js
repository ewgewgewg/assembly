import DisplayCard from "../DisplayCard";
import "./displaySeq.css";

const displaySeq = (source, setSource, allLocations, layer, side, turn) => {
  const seq = [];
  for (let i = 0; i < source.length; i++) {
    seq.push(
      <DisplayCard
        key={i}
        source={source[i]}
        allLocations={allLocations}
        layer={layer}
        side={side}
        index={i}
        turn={turn}
      />
    );
  }
  return <div className="basic-seq">{seq}</div>;
};

export default displaySeq;
