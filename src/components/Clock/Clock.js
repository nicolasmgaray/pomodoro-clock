import React, { useReducer, useEffect, useRef } from "react";
import { reducer, initialState } from "../../utils/reducer";
import useColorChange from "../../utils/useColorChange";
import Settings from "../Settings";
import Counter from "../Counter";
import Controls from "../Controls";
import "./Clock.css";

const Clock = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const audio = useRef(null);
  useColorChange(state.stage);


  // TIMER
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.running) dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [state.running]);

  // SWITCH STAGE AND SOUND ALARM
  useEffect(() => {
    if (state.timer === 0) {
      audio.current.play();
      dispatch({ type: "switch_stage" });
    }
  }, [state.timer]);

  return (
    <div id="clock">
      <Counter {...state}></Counter>
      <Settings {...state} dispatch={dispatch} />
      <Controls audioRef={audio} {...state} dispatch={dispatch}></Controls>
      <audio ref={audio} id="beep" preload="auto" src="https://goo.gl/65cBl1" />
    </div>
  );
};

export default Clock;
