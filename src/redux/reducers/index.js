import { combineReducers } from "redux";

import imageReducer from "../reducers/Image";

const reducers = {
  image: imageReducer,
};
export default combineReducers(reducers);
