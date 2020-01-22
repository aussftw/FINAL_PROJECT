import * as constants from "../constants";

const initialState = {
  isLoading: false,
  wishlist: [],
  error: "",
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.WISHLIST_REQUEST:
      return { ...state, isLoading: true };
    case constants.WISHLIST_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishlist: action.payload.products,
        error: "",
      };
    case constants.WISHLIST_GET_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case constants.WISHLIST_ADD_ITEM_SUCCESS:
      return { ...state, wishlist: action.payload.products, error: "" };
    case constants.WISHLIST_ADD_ITEM_FAILURE:
      return { ...state, error: action.payload };
    case constants.WISHLIST_DELETE_ITEM_SUCCESS:
      return { ...state, wishlist: action.payload.products, error: "" };
    case constants.WISHLIST_DELETE_ITEM_FAILURE:
      return { ...state, error: action.payload };
    case constants.WISHLIST_LOG_OUT:
      return { ...state, isLoading: false, wishlist: [], error: "" };
    default:
      return state;
  }
};

export default wishlistReducer;
