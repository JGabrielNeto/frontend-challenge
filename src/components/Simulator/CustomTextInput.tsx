import React, { useContext, useState } from "react";
import styles from "../../styles/CustomTextInput.module.sass";
import * as yup from 'yup'
import axios from "axios";

const CustomTextInput: React.FC = (props) => {

  const [CDI, setCDI] = useState("")
  const [IPCA, setIPCA] = useState("")

  const getCDI = async () => {
    await axios('http://localhost:3000/indicadores', {
      'method': 'GET',
    }).then((res) => {
      setCDI(res.data[0].valor)
    }).catch((e) => {
      console.log(e)
    })
  }

  const getIPCA = async () => {
    await axios('http://localhost:3000/indicadores', {
      'method': 'GET',
    }).then((res) => {
      setIPCA(res.data[1].valor)
    }).catch((e) => {
      console.log(e)
    })
  }

  if(CDI == "" && IPCA == "") {
    getIPCA();
    getCDI();
  }

  const inputSchema = yup.object().shape({
    initialContribution: yup.number(),
    monthlyContribution: yup.number(),
    deadline: yup.number(),
    profitability: yup.number(),
    ipca: yup.number(),
    cdi: yup.number()
  })

  const validateForm = async (event: any) => {
    event.preventDefault();
    let formData: object = {
      initialContribution: +event.target[0].value,
      monthlyContribution: +event.target[1].value,
      deadline: +event.target[2].value,
      profitability: +event.target[3].value,
      ipca: +event.target[4].value,
      cdi: +event.target[5].value
    };
    
    const dataValidation = await inputSchema.isValid(formData)
    }

  return (
  <>
  <form className={styles.form} id="form" onSubmit={validateForm}>
    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          id="inicial" 
          type="text" 
          placeholder=""
          pattern="^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
        <span className={styles.label}>Aporte Inicial</span>
        <span className={styles.focusBg}/>
        <span className={styles.warning}>Aporte deve ser um número.</span>
      </label>
    </div>

    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          id="mensal" 
          type="text"
          placeholder="" 
          pattern="^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$"/>
        <span className={styles.label}>Aporte Mensal</span>
        <span className={styles.focusBg}/>
        <span className={styles.warning}>Aporte deve ser um número.</span>
      </label>
    </div>

    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          id="prazo" 
          type="text" 
          placeholder="" 
          pattern="^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$"/>
        <span className={styles.label}>Prazo (em meses)</span>
        <span className={styles.focusBg}/>
        <span className={styles.warning}>Insira um <u>número</u> válido de meses</span>
      </label>
    </div>

    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          id="rentabilidade" 
          type="text" 
          placeholder="" 
          pattern="^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$"/>
        <span className={styles.label}>Rentabilidade</span>
        <span className={styles.focusBg}/>
        <span className={styles.warning}>Rentabilidade deve ser um número</span>
      </label>
    </div>

    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          required 
          readOnly 
          type="text" 
          placeholder="" 
          value={`${IPCA}%`}/>
        <span className={styles.label}>IPCA (ao ano)</span>
        <span className={styles.focusBg}/>
        </label>
    </div>

    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          required 
          readOnly 
          type="text" 
          placeholder="" 
          value={`${CDI}%`}/>
        <span className={styles.label}>CDI (ao ano)</span>
        <span className={styles.focusBg}/>
      </label>
    </div>

      <button className={styles.btn}><b>Limpar campos</b></button>
      <button type="submit" form="form" className={[styles.btn, styles.submitBtn].join(" ")}><b>Simular</b></button>
  </form>
  </>

  )
}

export default CustomTextInput