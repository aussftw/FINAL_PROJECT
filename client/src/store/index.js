import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
