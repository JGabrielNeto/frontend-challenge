import React from "react";
import styles from "../../styles/InfoIcon.module.sass";

const InfoIcon: React.FC = (props) => {
  return (
    <div className={styles.dropup}>
      <button className={styles.dropbtn} disabled>i</button>
      <div className={styles.dropupContent}>
        <p>{props.children}</p>
      </div>
    </div>

  )
}

export default InfoIcon