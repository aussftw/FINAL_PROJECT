import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import linksReducer from "./linksReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  linksReducer,
});

export default rootReducer;
