import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import linksReducer from "./linksReducer";
import contactsReducer from "./contactsReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import searchReducer from "./searchReducer";
import filterReducer from "./filterReducer";
import lastViewReducer from "./lastViewReducer";

const persistConfig = {
  key: "root",
  storage,
  version: 0,
  whitelist: ["cartReducer", "lastViewReducer"],
};

const rootReducer = combineReducers({
  loginReducer,
  linksReducer,
  contactsReducer,
  wishlistReducer,
  cartReducer,
  searchReducer,
  filterReducer,
  lastViewReducer,
});

export default persistReducer(persistConfig, rootReducer);
