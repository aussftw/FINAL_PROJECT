import axios from "axios";
import * as constants from "../constants";

export default function getLinks() {
  return dispatch => {
    axios
      .get("/api/links")
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
