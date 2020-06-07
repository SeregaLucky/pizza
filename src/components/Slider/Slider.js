import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactSiema from 'react-siema';
import styles from './Slider.module.css';
import { routes } from '../../servises/routes';

const Slide = props => <img {...props} alt="slide" />;

const options = {
  loop: true,
};

const Slider = () => {
  return (
    <div className={styles.slider}>
      <ReactSiema {...options}>
        <Slide src="#" />
        <Slide src="#" />
        <Slide src="#" />
      </ReactSiema>
    </div>
  );
};

export default Slider;
