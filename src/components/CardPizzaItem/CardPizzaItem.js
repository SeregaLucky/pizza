import React from 'react';
import styles from './CardPizzaItem.module.css';
import cardPizza from '../../assets/images/cardPizza.jpg';

const CardPizza = () => {
  return (
    <li>
      <div>
        <img src={cardPizza} alt="" />
      </div>
      <h3>Пицца Томато-Песто</h3>

      <ul className={styles.list}>
        <li>Лук</li>
        <li>Бекон</li>
        <li>Ветчина</li>
      </ul>

      <ul className={styles.list}>
        <li>M</li>
        <li>L</li>
        <li>XL</li>
      </ul>

      <div>
        <span></span>
        <button type="button">В корзину</button>
      </div>
    </li>
  );
};

export default CardPizza;
