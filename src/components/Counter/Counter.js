import React from "react";
import "./Counter.css";

const Counter = ({ stage, timer }) => {
  let minutes = Math.floor(timer / 60) ;
  let seconds = timer - minutes * 60;
  if(seconds<10) seconds="0"+seconds
  if(minutes<10) minutes="0"+minutes
  return (
    <div id="counter">
      <div id="timer-label">{stage}</div>
      <div id="time-left">{minutes+":"+seconds}</div>
    </div>
  );
};

export default Counter;
