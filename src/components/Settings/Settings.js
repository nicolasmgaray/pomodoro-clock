import React from "react";
import Selector from "../Selector";
import "./Settings.css";

const Settings = ({ breakLength, sessionLength, dispatch }) => {
  return (
    <div id="settings">
      <div className="group">
        <Selector
          dispatch={dispatch}
          value={breakLength / 60}
          idPrefix="break"
        />
        <p>
          minutes <span id="break-label"> breaks </span>
        </p>
      </div>
      <div className="group">
        <Selector
          dispatch={dispatch}
          value={sessionLength / 60}
          idPrefix="session"
        />
        <p>
          minutes <span id="session-label"> sesions</span>
        </p>
      </div>
    </div>
  );
};

export default Settings;
