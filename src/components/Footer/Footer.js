import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../servises/routes';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUp}>
        <a className={styles.phoneLink} href="tel:+38 044 444 44 44">
          +38 044 444 44 44
        </a>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link>I</Link>
          </li>
          <li className={styles.item}>
            <Link>T</Link>
          </li>
          <li className={styles.item}>
            <Link>F</Link>
          </li>
          <li className={styles.item}>
            <Link>in</Link>
          </li>
        </ul>

        <a className={styles.emailLink} href="mailto:zakaz@pizza.com">
          zakaz@pizza.com
        </a>
      </div>

      <div className={styles.footerUnder}>
        <p className={styles.textInfo}>
          Сайт разработан
          <Link className={styles.textInfoLink}> командой разработчиков</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
