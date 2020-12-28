import { combineReducers } from "redux";
import storeReducer from "./stores/reducers";

const rootReducer = combineReducers({ store: storeReducer });

export type RootState = ReturnType<typeof rootReducer>;
