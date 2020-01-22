const initialState = {
  searchResult: [],
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      return { ...state, searchResult: action.payload };
    case "SEARCH_LOADING":
      return state;
    // case "SEARCH_ERROR":
    //   return { ...state, searchResult: false };
    default:
      return state;
  }
}

export default searchReducer;
