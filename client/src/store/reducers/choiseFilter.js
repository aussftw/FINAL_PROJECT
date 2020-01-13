import {
  SEND_PRODUCT_REQUEST,
  GET_PRODUCT_LISTING,
} from "../../actions/product";

const initialState = {
  productListing: [],
  isProductListing: false,
  activeColor: "",
};

function product(state = initialState, action) {
  switch (action.type) {
    case SEND_PRODUCT_REQUEST:
      return {
        ...state,
        isProductListing: true,
      };
    case GET_PRODUCT_LISTING:
      return {
        ...state,
        // productListing: action.payload.productListing,
        productListing: action.payload,
        isProductListing: false,
      };

    default:
      return { ...state };
  }
}

export default product;
