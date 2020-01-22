import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import categoriesReducer from "./categoriesReducer";
import linksReducer from "./linksReducer";
import wishlistReducer from "./wishlistReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  loginReducer,
  linksReducer,
  wishlistReducer,
  searchReducer,
});

export default rootReducer;
