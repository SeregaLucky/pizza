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
  // console.log(props);
  // console.log(props.match);
  // console.log('props.match.path', props.match.path);
  // console.log(
  //   'props.match.path + routes.STOCK',
  //   props.match.path + routes.STOCK,
  // );
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
