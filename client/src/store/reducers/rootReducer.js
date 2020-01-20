import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import categoriesReducer from "./categoriesReducer";
import linksReducer from "./linksReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  loginReducer,
  linksReducer,
  wishlistReducer,
});

export default rootReducer;
