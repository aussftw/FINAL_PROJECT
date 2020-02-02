import * as constants from "../constants";

const initialState = {
  lastView: [],
  currentId: [],
  error: "",
};

function lastViewReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_TO_LAST_VIEW_SUCCESS:
      return {
        ...state,
        lastView: action.payload,
        error: "",
      };
    case constants.ADD_CURRENT_ID:
      return {
        ...state,
        currentId: action.payload,
        error: "",
      };
    default:
      return state;
  }
}

export default lastViewReducer;
