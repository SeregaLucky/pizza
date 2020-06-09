import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../../servises/routes';
// import styles from './MainPage.module.css';
import productOperations from '../../redux/product/productOperations';

import Slider from '../../components/Slider/Slider';
import AllStock from '../../components/AllStock/AllStock';
import AllPizza from '../../components/AllPizza/AllPizza';
import AllDrink from '../../components/AllDrink/AllDrink';

const MainPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(productOperations.getAllProducts()), []);

  return (
    <main>
      <h1>MainPage</h1>

      <Slider />

      <Switch>
        <Route exact path={routes.MAIN_PAGE} component={AllPizza} />
        <Route path={routes.STOCK} component={AllStock} />
        <Route path={routes.DRINKS} component={AllDrink} />
      </Switch>
    </main>
  );
};

export default MainPage;
