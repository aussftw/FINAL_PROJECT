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

  let lastViewedProducts = [];

  if (arr.length >= 5) {
    const arrLenght = arr.length - 4;

    arr.shift(arrLenght);
  }

  const inputId = data;

  const updateLastViewedProducts = (lastViewedProducts, newProduct) => {
    if (arr.some(item => item === newProduct)) {
      // eslint-disable-next-line
      return (lastViewedProducts = arr
        .filter(item => item !== newProduct)
        .concat(newProduct));
    }

    // eslint-disable-next-line
    return (lastViewedProducts = [...arr, ...[newProduct]]);
  };
  lastViewedProducts = updateLastViewedProducts(lastViewedProducts, inputId);

  dispatch(addToLastViewSuccess(lastViewedProducts));
};
