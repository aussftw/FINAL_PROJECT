import axios from "axios";
// import * as constants from "../constants";

export const editDataSuccess = data => {
  return {
    type: "EDIT_USER_DATA_SUCCESS",
    payload: data,
  };
};
export const editDataFailure = err => {
  return {
    type: "EDIT_USER_DATA_FAILURE",
    payload: err,
  };
};

export const editDataLocal = (event, value) => {
  return {
    type: "EDIT_USER_DATA",
    payload: { ...value, [event.target.name]: event.target.value },
  };
};

export const saveUserData = (event, updatedCustomer) => dispatch => {
  event.preventDefault();
  axios
    .put("/customer", updatedCustomer)
    .then(updatedUser => {
      // eslint-disable-next-line
      console.log(updatedUser);
      dispatch(editDataSuccess(updatedUser.data));
    })
    .catch(error => {
      dispatch(editDataFailure(error));
    });
};

export const editInputsData = (event, value) => dispatch => {
  dispatch(editDataLocal(event, value));
};
