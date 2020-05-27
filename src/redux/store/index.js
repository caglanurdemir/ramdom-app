import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/index";
import InitialState from "../reducers/initialState";
import thunk from "redux-thunk";

export default createStore(RootReducer, InitialState, applyMiddleware(thunk));
