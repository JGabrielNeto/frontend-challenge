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
        <CustomTextInput>Aporte inicial</CustomTextInput>
        <CustomTextInput>Aporte mensal</CustomTextInput>
        <CustomTextInput>Prazo (em meses)</CustomTextInput>
        <CustomTextInput>Rentabilidade</CustomTextInput>
        <CustomTextInput>IPCA(ao ano)</CustomTextInput>
        <CustomTextInput>CDI (ao ano)</CustomTextInput>
        <button className={styles.btn}><b>Limpar campos</b></button>
        <button className={[styles.btn, styles.submitBtn].join(" ")}><b>Simular</b></button>
    </div>
      
  )
}

export default Simulator