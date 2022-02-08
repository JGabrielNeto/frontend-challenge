import React from "react";
import styles from "../../styles/CustomRadio.module.sass"
import InfoIcon from "./InfoIcon";
import { useState, useContext } from "react";
import { ValuesContext } from "../../hooks/ValuesContext";

const CustomRadioIncome: React.FC = () => {

    const [income, setIncome] = useState<string>("bruto");
    const { setState, state } = useContext(ValuesContext);

    const handleChange = (e: any) => {
        setIncome(e.target.value);
        setState({
            ...state,
            income: e.target.value,
            madeNewRequest: false
        })
    }



    return (
        <form className={styles.customRadio}>
            <legend className={styles.title}>Rendimento</legend>
            <InfoIcon> <b>Bruto:</b> Valor total do rendimento sem descontos <br /><br />
                      <b>Líquido:</b> Valor final após os descontos</InfoIcon>
            <label>
                <input type="radio" 
                       name="rendimento" 
                       value="bruto" 
                       checked={income === "bruto"}
                       onChange={(e) => handleChange(e)}  />
                <span className={styles.first}>Bruto</span>
            </label>
            <label>
                <input type="radio" 
                       name="rendimento" 
                       value="liquido"
                       checked={income === "liquido"} 
                       onChange={(e) => handleChange(e)} />
                <span className={styles.last}>Líquido</span>
            </label>
        </form>
    )
}

export default CustomRadioIncome