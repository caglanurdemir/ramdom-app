import { UPDATE_IMAGE } from "../../actions/index";
import initialState from "../../reducers/initialState";

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_IMAGE:
      return {
        ...state,
        updateImage: !state.updateImage,
      };
    default:
      return state;
  }
}
