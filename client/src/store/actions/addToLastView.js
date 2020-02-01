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

  let lastViewedProducts = arr;

  if (arr.length >= 5) {
    const arrLenght = arr.length - 4;

    arr.shift(arrLenght);
  }

  const dataObj = {
    id: data,
    date: new Date().getTime(),
  };

  const updateLastViewedProducts = (lastViewedProducts, newProduct) => {
    if (lastViewedProducts.some(item => item.id === newProduct.id)) {
      console.log("SOVPADENIE");
      return lastViewedProducts
        .filter(item => item.id !== newProduct.id)
        .concat(newProduct);
    }
    console.log("NET_SOVPADENIE");
    // eslint-disable-next-line
    return (lastViewedProducts = [...arr, ...[newProduct]]);
  };

  lastViewedProducts = updateLastViewedProducts(lastViewedProducts, dataObj);

  console.log("lastViewedProducts", lastViewedProducts);

  dispatch(addToLastViewSuccess(lastViewedProducts));
};
