import React from "react";
import styles from "../../styles/CustomRadio.module.sass"
import InfoIcon from "./InfoIcon";

const CustomRadioIncome: React.FC = () => {

    return (
        <form className={styles.customRadio}>
            <legend className={styles.title}>Rendimento</legend>
            <InfoIcon> <b>Bruto:</b> Valor total do rendimento sem descontos <br /><br />
                      <b>Liquido:</b> Valor final após os descontos</InfoIcon>
            <label>
                <input type="radio" id="Bruto" name="rendimento" value="bruto" checked />
                <span className={styles.bruto}>Bruto</span>
            </label>
            <label>
                <input type="radio" id="Liquido" name="rendimento" value="liquido" />
                <span className={styles.liquido}>Liquido</span>
            </label>
        </form>
    )
}

export default CustomRadioIncome