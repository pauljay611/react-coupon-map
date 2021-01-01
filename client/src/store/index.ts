import {
  CombinedState,
  combineReducers,
  StateFromReducersMapObject,
  compose,
} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { getAllStoresEpic } from "./stores/epics";
import storeReducer from "./stores/reducers";
import { ActionsType } from "./stores/types";

export type RootState = CombinedState<
  StateFromReducersMapObject<typeof reducers>
>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const reducers = { store: storeReducer };

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  RootState
>();

const rootReducer = combineReducers(reducers);

const rootEpic = combineEpics(getAllStoresEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState, enhancer);
}

epicMiddleware.run(rootEpic);

const store = configureStore();

export default store;
