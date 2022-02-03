import React from "react";
import styles from "../../styles/Simulator.module.sass";
import CustomRadio from "./CustomRadioIncome";

const Simulator: React.FC = () => {
  return (
    <div className={styles.container}>
        <h2>Simulador</h2>
        <CustomRadio/>
    </div>
      
  )
}

export default Simulator