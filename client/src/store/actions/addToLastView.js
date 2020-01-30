import * as constants from "../constants";
// import { store } from "../index";

export const addToLastViewSuccess = data => {
    return {
        type: constants.ADD_TO_LAST_VIEW_SUCCESS,
        payload: data,
    };
};

export const addToLastView = (arr, data) => dispatch => {
        let current = [];
        if (arr.includes(data)) {
            current = arr.filter(x => x !== data);
            current = [...current, ...[data]];
        }
        else {
            if (arr.length >= 4) {
                    const arrLenght = arr.length - 3;
                    console.log("arrLenght", arrLenght);
                    arr.shift(arrLenght);
                }
            current = [...arr, ...[data]];
        }
        console.log("current", current);
        // const test = current.filter(x => x);
        dispatch(addToLastViewSuccess(current));

};