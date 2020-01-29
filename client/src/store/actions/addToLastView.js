import * as constants from "../constants";
import { store } from "../index";

const addToLastView = data => {

    const query = store.getState().lastViewReducer.lastView.map(item => {
        if (item !== data) {
            return item;
        }
        return false;
    });
    query.push(data);
    if (query.length > 20) {
        query.unshift(1)
    }

    if (store.getState().lastViewReducer.lastView.length >= 20) {

    }
}

export const addToLastViewSuccess = data => {

  return {
    type: constants.ADD_TO_LAST_VIEW,
    payload: data,
  };
};