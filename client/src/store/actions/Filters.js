import axios from "axios";
import { store } from "../index";
import * as constants from "../constants";

// Получение с бэка фильтров
export const getProducts = () => dispatch => {
  dispatch({ type: constants.GET_PRODUCT_REQUEST });
  axios.get("/api/products").then(list => {
    dispatch({
      type: constants.GET_ALL_PRODUCT_LISTING,
      payload: list.data,
    });
  });
};

export const getCategories = () => dispatch => {
  axios.get("/api/catalog").then(list => {
    dispatch({
      type: constants.GET_CATEGORY_LISTING,
      payload: list.data,
    });
  });
};

export const getColors = () => dispatch => {
  axios.get("/api/colors").then(list => {
    dispatch({
      type: constants.GET_COLOR_LISTING,
      payload: list.data,
    });
  });
};

export const getSizes = () => dispatch => {
  axios.get("/api/sizes").then(list => {
    dispatch({
      type: constants.GET_SIZE_LISTING,
      payload: list.data,
    });
  });
};

// Работа с фильтрами

const getFilteredProducts = (filters, dispatch) => {
  axios
    .get("/api/products/filter", {
      params: filters,
    })
    .then(list => {
      dispatch({
        type: constants.GET_PRODUCT_LISTING,
        payload: list.data.products,
      });
    });
};

export const selectCategory = category => dispatch => {
  dispatch({
    type: constants.SELECT_CATEGORY,
    payload: category,
  });
  getFilteredProducts(store.getState().filterReducer.filters, dispatch);
};

export const selectColor = color => dispatch => {
  dispatch({
    type: constants.SELECT_COLOR,
    payload: color.name,
  });
  getFilteredProducts(store.getState().filterReducer.filters, dispatch);
};

export const removeColor = color => dispatch => {
  if (color === "") {
    dispatch({
      type: constants.REMOVE_COLOR,
      payload: undefined,
    });
    getFilteredProducts(store.getState().filterReducer.filters, dispatch);
  } else {
    dispatch({
      type: constants.REMOVE_COLOR,
      payload: color,
    });
    getFilteredProducts(store.getState().filterReducer.filters, dispatch);
  }
};

export const setPageIndex = size => dispatch => {
  dispatch({
    type: constants.SELECT_SIZE,
    payload: size.name,
  });
};

export const selectSizes = size => dispatch => {
  dispatch({
    type: constants.SELECT_SIZE,
    payload: size.name,
  });
  getFilteredProducts(store.getState().filterReducer.filters, dispatch);
};

export const removeSizes = size => dispatch => {
  if (size === "") {
    dispatch({
      type: constants.REMOVE_SIZE,
      payload: undefined,
    });
    getFilteredProducts(store.getState().filterReducer.filters, dispatch);
  } else {
    dispatch({
      type: constants.REMOVE_SIZE,
      payload: size,
    });
    getFilteredProducts(store.getState().filterReducer.filters, dispatch);
  }
};

export const selectPrice = price => dispatch => {
  dispatch({
    type: constants.SELECT_PRICE,
    payload: price,
  });
  getFilteredProducts(store.getState().filterReducer.filters, dispatch);
};

export const setCurrentPage = currentPage => dispatch => {
  dispatch({
    type: constants.SELECT_CURRENT_PAGE,
    payload: currentPage,
  });
  getFilteredProducts(store.getState().filterReducer.filters, dispatch);
};
