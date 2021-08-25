import React from 'react';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section>
      <h1>Hello world</h1>
      <Button primary />
      <Button secondary />
      <button className={styles.primary}>Custom click button</button>
    </section>
  );
};

export default Hero;
