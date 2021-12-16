import React from "react";
import styles from './Button.module.css'
export let Button = ({ label='default value'}) => {
  return <button  className={styles.button}>{label}</button>;
};
