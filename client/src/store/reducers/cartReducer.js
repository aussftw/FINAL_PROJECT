const initialState = {
  cart: [],
  error: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTUALIZATION_LOCAL_CART_SUCCESS":
      return { ...state, cart: action.payload, error: "" };
    case "ACTUALIZATION_LOCAL_CART_FAILURE":
      return { ...state, error: action.payload };
    case "GET_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "GET_CART_FAILURE":
      return { ...state, error: action.payload };
    case "ADD_ITEM_CART_LOCAL_SUCCESS":
      return { ...state, cart: action.payload, error: "" };
    case "ADD_ITEM_CART_LOCAL_FAILURE":
      return { ...state, error: action.payload };
    case "ADD_ITEM_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "ADD_ITEM_CART_FAILURE":
      return { ...state, error: action.payload };
    case "DECREASE_ITEM_CART_LOCAL":
      return { ...state, cart: action.payload, error: "" };
    case "DECREASE_ITEM_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "DECREASE_ITEM_CART_FAILURE":
      return { ...state, error: action.payload };
    case "DELETE_ITEM_CART_LOCAL":
      return { ...state, cart: action.payload, error: "" };
    case "DELETE_ITEM_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "DELETE_ITEM_CART_FAILURE":
      return { ...state, error: action.payload };
    case "CHANGE_ITEM_CART_QUANTITY_LOCAL":
      return { ...state, cart: action.payload, error: "" };
    case "CHANGE_ITEM_CART_QUANTITY_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "CHANGE_ITEM_CART_QUANTITY_FAILURE":
      return { ...state, error: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [], error: "" };
    default:
      return state;
  }
};

export default cartReducer;
