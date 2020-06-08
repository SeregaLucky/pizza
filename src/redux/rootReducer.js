import { combineReducers } from 'redux';
/* import - reducers */
import authReducer from './auth/authReducer';
import productReducer from './product/productReducer';
import globalReducer from './global/globalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  global: globalReducer,
});

export default rootReducer;
