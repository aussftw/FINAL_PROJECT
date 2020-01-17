import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./categoriesReducer";

const persistConfig = {
  key: "cart",
  storage,
  version: 0,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
