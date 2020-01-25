import * as constants from "../constants";

const initialState = {
  cart: [],
  error: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTUALIZATION_LOCAL_CART_SUCCESS:
      return { ...state, cart: action.payload, error: "" };
    case constants.ACTUALIZATION_LOCAL_CART_FAILURE:
      return { ...state, error: action.payload };
    case constants.GET_CART_SUCCESS:
      return { ...state, cart: action.payload.products, error: "" };
    case constants.GET_CART_FAILURE:
      return { ...state, error: action.payload };
    case constants.ADD_ITEM_CART_LOCAL_SUCCESS:
      return { ...state, cart: action.payload, error: "" };
    case constants.ADD_ITEM_CART_LOCAL_FAILURE:
      return { ...state, error: action.payload };
    case constants.ADD_ITEM_CART_SUCCESS:
      return { ...state, cart: action.payload.products, error: "" };
    case constants.ADD_ITEM_CART_FAILURE:
      return { ...state, error: action.payload };
    case constants.DECREASE_ITEM_CART_LOCAL:
      return { ...state, cart: action.payload, error: "" };
    case constants.DECREASE_ITEM_CART_SUCCESS:
      return { ...state, cart: action.payload.products, error: "" };
    case constants.DECREASE_ITEM_CART_FAILURE:
      return { ...state, error: action.payload };
    case constants.DELETE_ITEM_CART_LOCAL:
      return { ...state, cart: action.payload, error: "" };
    case constants.DELETE_ITEM_CART_SUCCESS:
      return { ...state, cart: action.payload.products, error: "" };
    case constants.DELETE_ITEM_CART_FAILURE:
      return { ...state, error: action.payload };
    case constants.CHANGE_ITEM_CART_QUANTITY_LOCAL:
      return { ...state, cart: action.payload, error: "" };
    case constants.CHANGE_ITEM_CART_QUANTITY_SUCCESS:
      return { ...state, cart: action.payload.products, error: "" };
    case constants.CHANGE_ITEM_CART_QUANTITY_FAILURE:
      return { ...state, error: action.payload };
    case constants.CLEAR_CART:
      return { ...state, cart: [], error: "" };
    default:
      return state;
  }
};

export default cartReducer;
