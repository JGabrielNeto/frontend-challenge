import React from "react";
import styles from "../../styles/Simulator.module.sass";
import CustomRadioIncome from "./CustomRadioIncome";
import CustomRadioIndexing from "./CustomRadioIndexing";
import CustomTextInput from "./CustomTextInput";

const Simulator: React.FC = () => {
  
  return (
    <div className={styles.container}>
        <h2>Simulador</h2>
        <CustomRadioIncome/>
        <CustomRadioIndexing/>
        <CustomTextInput/>
    </div>
      
  )
}

export default Simulator