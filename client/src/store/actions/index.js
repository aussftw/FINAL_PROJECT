import axios from "axios";
import * as constants from "../constants";

export function getLinks() {
  return dispatch => {
    axios
      .get("/links")
      .then(links => {
        dispatch({
          type: constants.GET_LINKS_SUCCESS,
          payload: links.data,
        });
      })
      .catch(err => {
        dispatch({
          type: constants.GET_LINKS_FAILURE,
          payload: err,
        });
      });
  };
}
export function searchPhrases(data) {
  return {
    type: "SEARCH_SUCCESS",
    payload: data,
  };
}
