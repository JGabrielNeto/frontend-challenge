import React from "react";
import styles from "../../styles/CustomRadio.module.sass"

const CustomRadioIncome: React.FC = () => {

    return (
        <form className={styles.customRadio}>
            <legend className={styles.title}>Rendimento</legend>
            <div></div>
            <label>
                <input type="radio" id="Bruto" name="rendimento" value="bruto" />
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