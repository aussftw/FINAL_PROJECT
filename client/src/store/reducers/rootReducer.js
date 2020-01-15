import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  loginReducer,
});

export default rootReducer;
