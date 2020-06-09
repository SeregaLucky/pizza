import api from '../../servises/api';
import productActions from './productActions';

const getAllProducts = () => dispatch => {
  dispatch(productActions.allProductsStart());

  api
    .getAllProducts()
    .then(({ data }) => {
      console.log(data.products);
      // dispatch(productActions.allProductsSuccess(data.products))
    })
    .catch(error => dispatch(productActions.allProductsFailure(error)));
};

export default {
  getAllProducts,
};
