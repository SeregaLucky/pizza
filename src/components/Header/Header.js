import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { routes } from '../../servises/routes';
import SelectLanguages from '../SelectLanguages/SelectLanguages';

const Header = () => {
  return (
    <header>
      <div className={styles.headerUp}>
        <a className={styles.phoneLink} href="tel:+38 044 444 44 44">
          +38 044 444 44 44
        </a>

        <SelectLanguages />
      </div>

      <div className={styles.headerUnder}>
        <h1>Pizza</h1>

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to={''} className={styles.navLink}>
                Акции
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to={''} className={styles.navLink}>
                Пицца
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to={''} className={styles.navLink}>
                Напитки
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to={''} className={styles.navLink}>
                Сайды
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to={''} className={styles.navLink}>
                Десерты
              </NavLink>
            </li>
          </ul>
        </nav>

        <button type="button">By</button>
      </div>
    </header>
  );
};

export default Header;

{
  /* <li className={styles.navItem}>
  <NavLink to={''} className={styles.navLink}>
    Акции
              </NavLink>
</li>
  <li className={styles.navItem}>
    <NavLink to={''} className={styles.navLink}>
      Пицца
              </NavLink>
  </li>
  <li className={styles.navItem}>
    <NavLink to={''} className={styles.navLink}>
      Напитки
              </NavLink>
  </li>
  <li className={styles.navItem}>
    <NavLink to={''} className={styles.navLink}>
      Сайды
              </NavLink>
  </li>
  <li className={styles.navItem}>
    <NavLink to={''} className={styles.navLink}>
      Десерты
              </NavLink>
  </li> */
}
