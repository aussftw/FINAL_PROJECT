import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import categoriesReducer from "./categoriesReducer";
import linksReducer from "./linksReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  loginReducer,
  linksReducer,
});

export default rootReducer;
