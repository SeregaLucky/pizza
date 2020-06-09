import { combineReducers } from 'redux';
import productTypes from './productTypes';

const productsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case productTypes.GET_ALL_PRODUCTS_SUCCESS:
      return payload.products;

    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
});
