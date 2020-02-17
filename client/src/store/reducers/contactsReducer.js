import * as constants from "../constants";

const initialState = {
    contacts: [],
    error: "",
};

function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case constants.GET_CONTACTS_SUCCESS:
            return { ...state, contacts: action.payload, error: "" };
        case constants.GET_CONTACTS_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default contactsReducer;
