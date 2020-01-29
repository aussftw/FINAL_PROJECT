import * as constants from "../constants";

export const addToLastView = data => {
  return {
    type: constants.ADD_TO_LAST_VIEW,
    payload: data,
  };
};