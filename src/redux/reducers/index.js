// creatig root reducers

import { combineReducers } from "redux";
import { cartreducer } from "./reducers";

export const rootReducers=combineReducers({
    cartreducer
})