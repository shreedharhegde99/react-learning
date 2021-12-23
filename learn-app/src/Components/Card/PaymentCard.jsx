import React from "react";
import styles from "./PaymentCard.module.css";
import Images from "./Images";
import Devices from "./Devices";

export let PaymentCard = (props) => {  
  let { date, icon, headTop, headBottom, devices, color = "#0F9D58" } = props;

  return (
    <div>
      <div className={styles.cardContainer} style={{ backgroundColor: color }}>
        <div className={styles.cardHeader}>
          <div>{date}</div>
          <div>
            <Images src={icon} />
          </div>
        </div>
        <div className={styles.cardButton}>Case Study</div>
        <h3>{headTop} </h3>
        <h3>{headBottom}</h3>

        <div className={styles.footer}>
          <div className={styles.footer}>
            <Devices label={devices} />
          </div>
          <div>
            =-->
          </div>
        </div>
      </div>
    </div>
  );
};
