import { createStore, applyMiddleware } from "redux";
import bookReducer from "./booking/bookReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { logger } from "redux-logger";

const store = createStore(bookReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
