import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../servises/routes';
// import styles from './MainPage.module.css';
import Slider from '../../components/Slider/Slider';
// import CardPizzaList from '../../components/CardPizzaList/CardPizzaList';
import AllStock from '../../components/AllStock/AllStock';
import AllPizza from '../../components/AllPizza/AllPizza';
import AllDrink from '../../components/AllDrink/AllDrink';

const MainPage = props => {
  console.log(props);
  return (
    <main>
      <Slider />

      <Switch>
        <Route path={routes.STOCK} component={AllStock} />
        <Route path={routes.PIZZA} component={AllPizza} />
        <Route path={routes.DRINKS} component={AllDrink} />
      </Switch>

      {/* <CardPizzaList />
      <CardPizzaList />
      <CardPizzaList /> */}
    </main>
  );
};

export default MainPage;
