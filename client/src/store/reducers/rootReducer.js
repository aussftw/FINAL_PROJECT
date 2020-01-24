import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import linksReducer from "./linksReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import searchReducer from "./searchReducer";
import filterReducer from "./filterReducer";

const persistConfig = {
  key: "cart",
  storage,
  version: 0,
  whitelist: ["cartReducer"],
};

const rootReducer = combineReducers({
  loginReducer,
  linksReducer,
  wishlistReducer,
  cartReducer,
  searchReducer,
  filterReducer
});

export default persistReducer(persistConfig, rootReducer);
