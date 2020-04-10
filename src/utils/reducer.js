const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "tick":
      if (state.running && state.timer > 0)
        return { ...state, timer: state.timer - 1 };
      else return { ...state };

    case "switch_stage":
      if (state.stage === "Session")
        return { ...state, stage: "Break", timer: state.breakLength };
      else return { ...state, stage: "Session", timer: state.sessionLength };

    case "toggle":
      return { ...state, running: !state.running };

    case "set_session":
      if (state.running || action.payload <= 0 || action.payload > 3600)
        return { ...state };
      else {
        let newSessionLength = action.payload;
        let newTimer =
          state.stage === "Session" ? newSessionLength : state.breakLength;
        return { ...state, sessionLength: newSessionLength, timer: newTimer };
      }

    case "set_break":
      if (state.running || action.payload <= 0 || action.payload > 3600)
        return { ...state };
      else {
        let newBreakLength = action.payload;
        let newTimer =
          state.stage === "Session" ? state.sessionLength : newBreakLength;
        return { ...state, breakLength: newBreakLength, timer: newTimer };
      }

    case "reset":
      return {
        ...initialState,
      };

    default:
      return { ...state };
  }
};

const initialState = {
  breakLength: 5 * 60,
  sessionLength: 25 * 60,
  stage: "Session",
  timer: 25 * 60,
  running: false,
};

export { reducer, initialState };
