import * as constants from "../constants";

const initialState = {
  categories: [],
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
