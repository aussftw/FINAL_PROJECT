/* eslint-disable  Unexpected token ... */
import * as constants from "../constants";

const initialState = {
  productListing: [],
  categoryListing: [],
  colorListing: [],
  sizeListing: [],
  isProductListing: false,
  filters: {
    color: undefined,
    sizes: undefined,
    categories: undefined,
    maxPrice: undefined,
  },
  currentPage: 1,
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    // Action на получение фильтров с бэка
    case constants.SEND_PRODUCT_REQUEST:
      return{
        ...state,
        isProductListing: false,
      };

    case constants.GET_PRODUCT_LISTING:
      return {
        ...state,
        productListing: action.payload,
        isProductListing: true,
      };

    case constants.SEND_GET_CATEGORY_LISTING:
      return {
        ...state,
        isProductListing: true,
      };

    case constants.GET_CATEGORY_LISTING:
      return {
        ...state,
        categoryListing: action.payload,
      };

    case constants.SEND_GET_COLOR_LISTING:
      return {
        ...state,
        isProductListing: !true,
      };

    case constants.GET_COLOR_LISTING:
      return {
        ...state,
        colorListing: action.payload,
      };

    case constants.SEND_GET_SIZE_LISTING:
      return {
        ...state,
        isProductListing: true,
      };

    case constants.GET_SIZE_LISTING:
      return {
        ...state,
        sizeListing: action.payload,
      };

    // Работа с фильтрами
    case constants.SELECT_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: action.payload,
        },
      };

    case constants.SELECT_COLOR:
      if (!state.filters.color) {
        return {
          ...state,
          filters: {
            ...state.filters,
            color: action.payload.color,
          },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          color: `${state.filters.color},${action.payload.color}`,
        },
      };

    case constants.REMOVE_COLOR:
      return {
        ...state,
        filters: {
          ...state.filters,
          color: action.payload,
        },
      };

    case constants.SELECT_SIZE:
      if (!state.filters.sizes) {
        return {
          ...state,
          filters: {
            ...state.filters,
            sizes: action.payload.sizes,
          },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          sizes: `${state.filters.sizes},${action.payload.sizes}`,
        },
      };

    case constants.REMOVE_SIZE:
      return {
        ...state,
        filters: {
          ...state.filters,
          sizes: action.payload,
        },
      };

    case constants.SELECT_PRICE:
      console.log("REDUCER_SELECT_PRICE", action.payload);
      return {
        ...state,
        filters: {
          ...state.filters,
          maxPrice: action.payload,
          minPrice: "0",
        },
      };
    case constants.SELECT_CURRENT_PAGE:
      console.log("SELECT_CURRENT_PAGE", action.payload);
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return { ...state };
  }
}

export default filterReducer;
