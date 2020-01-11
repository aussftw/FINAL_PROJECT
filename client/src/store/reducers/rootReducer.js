import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  categoriesReducer,
});

export default rootReducer;
