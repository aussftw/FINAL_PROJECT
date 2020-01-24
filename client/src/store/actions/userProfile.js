import axios from "axios";
import * as constants from "../constants";

export const editDataSuccess = data => {
  return {
    type: constants.EDIT_USER_DATA_SUCCESS,
    payload: data,
  };
};
export const editDataFailure = err => {
  return {
    type: constants.EDIT_USER_DATA_FAILURE,
    payload: err,
  };
};

export const editDataLocal = (event, value) => {
  return {
    type: constants.EDIT_USER_DATA_LOCAL,
    payload: { ...value, [event.target.name]: event.target.value },
  };
};

export const saveUserData = (event, updatedCustomer) => dispatch => {
  event.preventDefault();

  axios
    .put("/api/customers", updatedCustomer)
    .then(updatedUser => {
      dispatch(editDataSuccess(updatedUser.data));
      // eslint-disable-next-line no-undef
      localStorage.setItem("user", JSON.stringify(updatedUser.data));
    })
    .catch(error => {
      dispatch(editDataFailure(error));
      // eslint-disable-next-line no-undef
      const localUserData = JSON.parse(localStorage.getItem("user"));
      if (localUserData) {
        dispatch({
          type: constants.GET_USER_DATA_FROM_LOCALSTORAGE,
          payload: localUserData,
        });
      }
    });
};

export const editInputsData = (event, value) => dispatch => {
  dispatch(editDataLocal(event, value));
};
