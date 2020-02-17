import axios from "axios";
import * as constants from "../constants";

export const getContacts = () => {
    return dispatch => {
        axios
            .get("/api/contacts")
            .then(contacts => {
                dispatch({
                    type: constants.GET_CONTACTS_SUCCESS,
                    payload: contacts.data,
                });

            })
            .catch(err => {
                dispatch({
                    type: constants.GET_CONTACTS_FAILURE,
                    payload: err,
                });
            });
    };
};