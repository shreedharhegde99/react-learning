import React from "react";
import styles from "./Card/PaymentCard.module.css";

let List = (prop) => {
  return (
    <div>
      List
      <ul className={styles.list}>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
      </ul>
    </div>
  );
};

export default List;
