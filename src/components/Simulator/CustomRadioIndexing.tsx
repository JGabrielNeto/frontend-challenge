import React from "react";
import styles from "../../styles/CustomRadio.module.sass"
import InfoIcon from "./InfoIcon";
import { useState, useContext } from "react";
import { ValuesContext } from "../../hooks/ValuesContext";

const CustomRadioIndexing: React.FC = () => {

    const [indexing, setIndexing] = useState("pre");
    const { setState, state } = useContext(ValuesContext);

    const handleChange = (e: any) => {
        setIndexing(e.target.value);
        setState({
            ...state,
            indexing: e.target.value,
            madeNewRequest: false
        })
    }

    return (
        <form className={[styles.customRadio, styles.indexing].join(" ")}>
            <legend className={styles.title}>Tipos de indexação</legend>
            <InfoIcon> <b>Pré-fixado:</b> Você saberá previamente o rendimento. <i>Menor risco</i><br /><br />
                      <b>Pós-fixado:</b> O rendimento se atrela à um indexador econômico a depender do título. <i>Maior risco</i><br /><br />
                      <b>Fixado:</b> O rendimento será indexado ao IPCA.</InfoIcon>
            <label>
                <input type="radio" 
                       name="indexador" 
                       value="pre" 
                       checked={indexing === "pre"}
                       onChange={(e) => handleChange(e)}  />
                <span className={styles.first}>PRÉ</span>
            </label>
            <label>
                <input type="radio" 
                       name="indexador" 
                       value="pos"
                       checked={indexing === "pos"} 
                       onChange={(e) => handleChange(e)} />
                <span>PÓS</span>
            </label>
            <label>
                <input type="radio" 
                       name="indexador" 
                       value="ipca"
                       checked={indexing === "ipca"} 
                       onChange={(e) => handleChange(e)} />
                <span className={styles.last}>FIXADO</span>
            </label>
           
        </form>
    )
}

export default CustomRadioIndexing