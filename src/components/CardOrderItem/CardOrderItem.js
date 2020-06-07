import React from 'react';
import styles from './CardOrderItem.module.css';
import cardOrder from '../../assets/images/cardOrder.jpg';

const CardOrderItem = () => {
  return (
    <li>
      <button type="button">Close</button>

      <div>
        <img src={cardOrder} alt="" />
      </div>

      <div>
        <h3>Пицца Чикаго</h3>

        <ul>
          <li>Лук</li>
          <li>Бекон</li>
          <li>Ветчина</li>
        </ul>

        <div>
          <span>89.00 грн</span>

          <div>
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardOrderItem;
