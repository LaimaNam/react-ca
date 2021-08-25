import React from 'react';
import styles from './Button.module.css';

const Button = ({ primary, secondary }) => {
  let btnClass;
  if (primary) btnClass = styles.primary;
  if (secondary) btnClass = styles.secondary;

  return <button className={btnClass}>Click me</button>;
};

export default Button;
