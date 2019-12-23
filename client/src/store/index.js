import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initState,
    // applyMiddleware(thunk, logger),
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  return store;
}
