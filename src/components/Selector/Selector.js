import React from "react";
import "./Selector.css";

const Selector = ({ value, idPrefix, dispatch }) => {
  let type = "set_" + idPrefix;
  return (
    <div className="selector">
      <div className="selector-value" id={idPrefix + "-length"}>
        {value}
      </div>
      <div className="selector-buttons">
        <button
          className="selector-increment"
          onClick={() => dispatch({ type, payload: (value + 1) * 60 })}
          id={idPrefix + "-increment"}
        >
          +
        </button>
        <button
          className="selector-decrement"
          onClick={() => dispatch({ type, payload: (value - 1) * 60 })}
          id={idPrefix + "-decrement"}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Selector;
