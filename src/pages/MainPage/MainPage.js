import React from 'react';
import styles from './MainPage.module.css';
import Slider from '../../components/Slider/Slider';
import CardPizzaList from '../../components/CardPizzaList/CardPizzaList';

const MainPage = () => {
  return (
    <main>
      <Slider />

      <CardPizzaList />
      <CardPizzaList />
      <CardPizzaList />
    </main>
  );
};

export default MainPage;
