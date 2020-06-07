import React from 'react';
import styles from './CardPizzaList.module.css';
import CardPizzaItem from '../CardPizzaItem/CardPizzaItem';

const CardPizzaList = () => {
  return (
    <>
      <h2>Пицца: 1</h2>

      <ul className={styles.list}>
        {[1, 2, 3].map(item => (
          <CardPizzaItem />
        ))}
      </ul>
    </>
  );
};

export default CardPizzaList;
