import axios from "axios";

export const SEND_PRODUCT_REQUEST = "SEND_PRODUCT_REQUEST";
export const GET_PRODUCT_LISTING = "GET_PRODUCT_LISTING";

export const getProducts = filters => dispatch => {
  dispatch({
    type: SEND_PRODUCT_REQUEST,
  });
  console.log("ON_GET_PRODUCTS_LIST");

  axios.get("/products/filter", { params: filters }).then(list => {
    dispatch({
      type: GET_PRODUCT_LISTING,
      payload: list.data.products,
      // payload: list.data.map(item => item.product)
    });
  });
};
