import React from "react";
import styles from "../../styles/CustomRadio.module.sass"
import InfoIcon from "./InfoIcon";
import { useState } from "react";

const CustomRadioIncome: React.FC = () => {

    const [income, setIncome] = useState("");

    const handleChangeGrossIncome = () => {
        setIncome("bruto")
    }

    const handleChangeNetIncome = () => {
        setIncome("liquido")
    }

    if(income === "") {
        handleChangeGrossIncome()
    }

    return (
        <form className={styles.customRadio}>
            <legend className={styles.title}>Rendimento</legend>
            <InfoIcon> <b>Bruto:</b> Valor total do rendimento sem descontos <br /><br />
                      <b>Líquido:</b> Valor final após os descontos</InfoIcon>
            <label>
                <input type="radio" 
                       name="rendimento" 
                       value="gross" 
                       checked={income === "bruto"}
                       onChange={() => {handleChangeGrossIncome();}}  />
                <span className={styles.first}>Bruto</span>
            </label>
            <label>
                <input type="radio" 
                       name="rendimento" 
                       value="net"
                       checked={income === "liquido"} 
                       onChange={() => handleChangeNetIncome()} />
                <span className={styles.last}>Líquido</span>
            </label>
        </form>
    )
}

export default CustomRadioIncome