const initialState = {
  wishlist: [],
  error: "",
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WISHLIST_GET_SUCCESS":
      return { ...state, wishlist: action.payload.products, error: "" };
    case "WISHLIST_GET_FAILURE":
      return { ...state, error: action.payload };
    case "WISHLIST_ADD_ITEM_SUCCESS":
      return { ...state, wishlist: action.payload.products, error: "" };
    case "WISHLIST_ADD_ITEM_FAILURE":
      return { ...state, error: action.payload };
    case "WISHLIST_DELETE_ITEM_SUCCESS":
      return { ...state, wishlist: action.payload.products, error: "" };
    case "WISHLIST_DELETE_ITEM_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default wishlistReducer;
