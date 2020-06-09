import productTypes from './productTypes';

const allProductsStart = () => ({
  type: productTypes.GET_ALL_PRODUCTS_START,
});

const allProductsSuccess = products => ({
  type: productTypes.GET_ALL_PRODUCTS_SUCCESS,
  payload: { products },
});

const allProductsFailure = error => ({
  type: productTypes.GET_ALL_PRODUCTS_FAILURE,
  payload: { error },
});

export default {
  allProductsStart,
  allProductsSuccess,
  allProductsFailure,
};
