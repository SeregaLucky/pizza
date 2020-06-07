import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../servises/routes';
import MainPage from '../pages/MainPage/MainPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={routes.MAIN_PAGE} component={MainPage} />
        <Route path={routes.ORDER_PAGE} component={OrderPage} />
        {/* <Redirect to="" /> */}
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
