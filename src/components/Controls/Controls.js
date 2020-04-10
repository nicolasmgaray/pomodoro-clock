import React from "react";
import "./Controls.css";

const Controls = ({ running, dispatch, audioRef }) => {
  return (
    <div id="controls">
      <div
        id="start_stop"
        className="control"
        onClick={() => {
          dispatch({ type: "toggle" });
        }}
      >
        {!running ? (
          <i className="fas fa-play"></i>
        ) : (
          <i className="fas fa-pause"></i>
        )}
      </div>
      <div
        id="reset"
        className="control"
        onClick={() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          dispatch({ type: "reset" });
        }}
      >
        <i className="fas fa-sync"></i>
      </div>
    </div>
  );
};

export default Controls;
