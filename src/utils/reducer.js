const actions = {
  TICK: "TICK",
  SWITCH_STAGE: "SWITCH_STAGE",
  TOGGLE: "TOGGLE",
  SET_SESSION_TIME: "SET_SESSION_TIME",
  SET_BREAK_TIME: "SET_BREAK_TIME",
  RESET: "RESET",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TICK:
      if (state.running && state.timer > 0)
        return { ...state, timer: state.timer - 1 };
      else return { ...state };

    case actions.SWITCH_STAGE:
      if (state.stage === "Session")
        return { ...state, stage: "Break", timer: state.breakLength };
      else return { ...state, stage: "Session", timer: state.sessionLength };

    case actions.TOGGLE:
      return { ...state, running: !state.running };

    case actions.SET_SESSION_TIME:
      if (state.running || action.payload <= 0 || action.payload > 3600)
        return { ...state };
      else {
        let newSessionLength = action.payload;
        let newTimer =
          state.stage === "Session" ? newSessionLength : state.breakLength;
        return { ...state, sessionLength: newSessionLength, timer: newTimer };
      }

    case actions.SET_BREAK_TIME:
      if (state.running || action.payload <= 0 || action.payload > 3600)
        return { ...state };
      else {
        let newBreakLength = action.payload;
        let newTimer =
          state.stage === "Session" ? state.sessionLength : newBreakLength;
        return { ...state, breakLength: newBreakLength, timer: newTimer };
      }

    case actions.RESET:
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

export { reducer, initialState, actions };
