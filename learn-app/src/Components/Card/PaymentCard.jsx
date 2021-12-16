import React from "react";
import styles from "./PaymentCard.module.css";

export let PaymentCard = (props) => {   
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div>{new Date().toLocaleDateString()}</div>
        <div>
          <img
            width="30px"
            src={props.src}
            alt="icon"
          />
        </div>
      </div>
      <div className={styles.cardButton}>Case Study</div>
      <h3>{props.name} </h3>
      <h3>Pay</h3>

      <div className={styles.footer}>
        <div className={styles.footer}>
          <div>Desktop</div>
          <div>-</div>
          <div>Mobile</div>
        </div>
        <div>
          <div> ==> </div>
        </div>
      </div>
      <hr className={styles.line}/>
    </div>
  );
};
