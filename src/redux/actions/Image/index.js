import { UPDATE_IMAGE } from "../index";

export function updateImage() {
  return function (dispatch) {
    return dispatch({
      type: UPDATE_IMAGE,
    });
  };
}
