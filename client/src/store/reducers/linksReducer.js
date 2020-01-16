const initialState = {
  links: [],
};

function linksReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LINKS_SUCCESS":
      return { ...state, links: action.payload };
    default:
      return state;
  }
}

export default linksReducer;
