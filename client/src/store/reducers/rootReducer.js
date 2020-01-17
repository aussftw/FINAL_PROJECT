import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginReducer";

import categoriesReducer from "./categoriesReducer";
import linksReducer from "./linksReducer";

const persistConfig = {
  key: "cart",
  storage,
  version: 0,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  categoriesReducer,
  loginReducer,
  linksReducer,
});

export default persistReducer(persistConfig, rootReducer);
