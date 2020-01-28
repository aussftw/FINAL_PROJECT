import * as constants from "../constants";

const initialState = {
  lastView: [],
};

function lastViewReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_TO_LAST_VIEW:
      return { ...state, lastView: state.lastView.concat(action.payload) };

    default:
      return state;
  }
}

export default lastViewReducer;
