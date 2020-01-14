import axios from "axios";

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
          type: "GET_CATEGORIES_SUCCESS",
          payload: catalog.data,
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_CATEGORIES_ERROR",
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
          type: "GET_LINKS_SUCCESS",
          payload: links.data,
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_LINKS_ERROR",
          payload: err,
        });
      });
  };
}
