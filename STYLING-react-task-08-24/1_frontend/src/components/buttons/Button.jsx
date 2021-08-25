import React from 'react';
import styles from './Buttons.module.css';

const Button = ({ text }) => {
  return <button className={styles.greenBtn}>{text}</button>;
};

export default Button;
