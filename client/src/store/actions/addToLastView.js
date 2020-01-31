import * as constants from "../constants";
import { store } from "../index";

export const addToLastViewSuccess = data => {
  return {
    type: constants.ADD_TO_LAST_VIEW_SUCCESS,
    payload: data,
  };
};

export const addCurrentId = data => {
  return {
    type: constants.ADD_CURRENT_ID,
    payload: data,
  };
};

export const addToLastView = data => dispatch => {
  dispatch(addCurrentId(data));
  const arr = store.getState().lastViewReducer.lastView;

  let current = [];
  if (arr.includes(data)) {
    current = arr.filter(x => x !== data);
    current = [...current, ...[data]];
  } else {
    if (arr.length >= 5) {
      const arrLenght = arr.length - 4;
      console.log("arrLenght", arrLenght);
      arr.shift(arrLenght);
    }
    current = [...arr, ...[data]];
  }
  console.log("current", current);
  // const test = current.filter(x => x);
  dispatch(addToLastViewSuccess(current));
};
