import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'https://evening-caverns-34846.herokuapp.com';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const getAllProducts = () => axios.get('/products');

export default {
  getAllProducts,
};

// GET / products /? category = "category"
// categories: 'pizza', 'drinks', 'sides', 'desserts'

// GET / products / id
