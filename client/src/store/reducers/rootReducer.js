import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import chooseColor from "./choiseFilter";

const rootReducer = combineReducers({
  categoriesReducer,
  chooseColor,
});

export default rootReducer;
