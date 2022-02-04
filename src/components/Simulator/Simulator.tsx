import React from "react";
import styles from "../../styles/Simulator.module.sass";
import CustomRadioIncome from "./CustomRadioIncome";
import CustomRadioIndexing from "./CustomRadioIndexing";

const Simulator: React.FC = () => {
  return (
    <div className={styles.container}>
        <h2>Simulador</h2>
        <CustomRadioIncome/>
        <CustomRadioIndexing/>
    </div>
      
  )
}

export default Simulator