import axios from "axios";
import * as constants from "../constants";

// eslint-disable-next-line import/prefer-default-export
export function getCategories() {
  return dispatch => {
    // dispatch({
    //   type: "GET_FRIENDS_REQUEST",
    // })
    axios
      .get("/catalog")
      .then(catalog => {
        dispatch({
          type: constants.GET_CATEGORIES_SUCCESS,
          payload: catalog.data,
        });
      })
      .catch(err => {
        dispatch({
          type: constants.GET_CATEGORIES_FAILURE,
          payload: err,
        });
      });
  };
}

export function getLinks() {
  return dispatch => {
    // dispatch({
    //   type: "GET_FRIENDS_REQUEST",
    // })
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
