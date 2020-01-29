import * as constants from "../constants";
import { store } from "../index";

export const addToLastViewSuccess = data => {
  return {
    type: constants.ADD_TO_LAST_VIEW_SUCCESS,
    payload: data,
  };
};

export const addToLastView = (arr, data) => dispatch => {
  if (!arr.length) {
    const newArr = [...arr, ...[data]];
    dispatch(addToLastViewSuccess(newArr));
    console.log("IF_STATE_EMPTY", newArr);
  } else {
    const newArr = [...arr, ...[data]];
    const unique = [...new Set(newArr)];
    console.log("unique", unique);
    let current = [];
    if (unique.includes(data)) {
      current = unique.filter(x => x !== data);
      current = [...current, ...[data]];
    }
    console.log("current", current);

    const lastSlice = current[current.length - 1];
    console.log("lastSlice", lastSlice);
    const test = current.filter(x => x);

    dispatch(addToLastViewSuccess(current));
  }
};
