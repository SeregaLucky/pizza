import React from 'react';
import styles from './OrderPage.module.css';
import CardOrderItem from '../../components/CardOrderItem/CardOrderItem';

const OrderPage = () => {
  console.log('OrderPage');
  return (
    <main>
      <h1>OrderPage</h1>

      <h2>Ваш заказ</h2>

      <ul className={styles.list}>
        {[1, 2, 3].map(item => (
          <CardOrderItem key={item} />
        ))}
      </ul>
    </main>
  );
};

export default OrderPage;
