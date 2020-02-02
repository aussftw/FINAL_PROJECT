import * as constants from "../constants";
import { store } from "../index";

export const addToLastViewSuccess = data => {
    return {
        type: constants.ADD_TO_LAST_VIEW_SUCCESS,
        payload: data,
    };
};

export const addToLastView = (data) => dispatch => {
    const arr = store.getState().lastViewReducer.lastView;
    let current = [];
        if (
            arr.some(e => e.itemNo === data.itemNo)
        ) {
            current = arr.filter(x => x.itemNo !== data.itemNo);
            current = [...current, ...[data]];
        }
        else {
            if (arr.length >= 4) {
                    const arrLenght = arr.length - 3;
                    arr.shift(arrLenght);
                }
            current = [...arr, ...[data]];
        }
        dispatch(addToLastViewSuccess(current));
};