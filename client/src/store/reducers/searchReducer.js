import * as constants from "../constants";

const initialState = {
  searchResult: [],
  error: "",
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SEARCH_SUCCESS:
      return { ...state, searchResult: action.payload };
    // case "SEARCH_LOADING":
    //   return state;
    case constants.SEARCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
