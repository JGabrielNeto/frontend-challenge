import React from "react";
import styles from "../../styles/CustomRadio.module.sass"
import InfoIcon from "./InfoIcon";
import { useState, useContext } from "react";
import { ValuesContext } from "../ValuesContext";

const CustomRadioIndexing: React.FC = () => {

    const [Indexing, setIndexing] = useState("pre");

    const handleChangePreFixed = () => {
        setIndexing("pre")
    }

    const handleChangePostFixed = () => {
        setIndexing("pos")
    }

    const handleChangeIPCA = () => {
        setIndexing("ipca")
    }

    console.log(useContext(ValuesContext))

    return (
        <form className={[styles.customRadio, styles.indexing].join(" ")}>
            <legend className={styles.title}>Tipos de indexação</legend>
            <InfoIcon> <b>Pré-fixado:</b> Você saberá previamente o rendimento. <i>Menor risco</i><br /><br />
                      <b>Pós-fixado:</b> O rendimento se atrela à um indexador econômico a depender do título. <i>Maior risco</i><br /><br />
                      <b>Fixado:</b> O rendimento será indexado ao IPCA.</InfoIcon>
            <label>
                <input type="radio" 
                       name="indexador" 
                       value="gross" 
                       checked={Indexing === "pre"}
                       onChange={() => {handleChangePreFixed();}}  />
                <span className={styles.first}>PRÉ</span>
            </label>
            <label>
                <input type="radio" 
                       name="indexador" 
                       value="net"
                       checked={Indexing === "pos"} 
                       onChange={() => handleChangePostFixed()} />
                <span>PÓS</span>
            </label>
            <label>
                <input type="radio" 
                       name="indexador" 
                       value="net"
                       checked={Indexing === "ipca"} 
                       onChange={() => handleChangeIPCA()} />
                <span className={styles.last}>FIXADO</span>
            </label>
           
        </form>
    )
}

export default CustomRadioIndexing