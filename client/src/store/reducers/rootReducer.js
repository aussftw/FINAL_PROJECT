import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import categoriesReducer from "./categoriesReducer";
import linksReducer from "./linksReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  loginReducer,
  linksReducer,
  searchReducer,
});

export default rootReducer;
