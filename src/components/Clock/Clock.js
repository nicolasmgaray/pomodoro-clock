import React, { useReducer, useEffect, useRef } from "react";
import { reducer, initialState, actions } from "../../utils/reducer";
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
      if (state.running) dispatch({ type: actions.TICK });
    }, 1000);
    return () => clearInterval(interval);
  }, [state.running]);

  // SWITCH STAGE AND SOUND ALARM
  useEffect(() => {
    if (state.timer === 0) {
      audio.current.play();
      dispatch({ type: actions.SWITCH_STAGE });
    }
  }, [state.timer]);

  return (
    <div id="clock">
      <Counter {...state}></Counter>
      <Settings {...state} dispatch={dispatch} />
      <Controls audioRef={audio} {...state} dispatch={dispatch}></Controls>
      <audio ref={audio} id="beep" preload="auto" src="./alarm.mp3" />
    </div>
  );
};

export default Clock;
