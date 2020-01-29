import * as constants from "../constants";
import { store } from "../index";

export const addToLastViewSuccess = data => {
  return {
    type: constants.ADD_TO_LAST_VIEW_SUCCESS,
    payload: data,
  };
};

export const addToLastView = data => dispatch => {
  let query = [];

  if (store.getState().lastViewReducer.lastView.length < 1) {
    query.push(data);
    dispatch(addToLastViewSuccess(query));
  } else {
    query = store.getState().lastViewReducer.lastView.map(item => {
      if (item !== data) {
        return item;
      }
      console.log("query", query);
      return false;
    });

    query.unshift(data);

    let newQuery = [];
    if (query.length > 4) {
      newQuery = query.slice(0, 3);
    }
    console.log("newQuery", newQuery);

    dispatch(addToLastViewSuccess(newQuery));
  }
};
