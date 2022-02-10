/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import styles from "../../styles/CustomTextInput.module.sass";
import axios from "axios";
import { ValuesContext } from "../../hooks/ValuesContext";

const CustomForm: React.FC = (props) => {

  const [CDI, setCDI] = useState("");
  const [IPCA, setIPCA] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { state, setState } = useContext(ValuesContext)
  const [formData, setFormData] = useState<formData>({
                                              initial: "",
                                              monthly: "",
                                              percent: "",
                                              month: ""
                                            } as formData);

  interface formData {
    initial: string,
    monthly: string,
    percent: string,
    month: string
  }
   
  useEffect(() => {
    if(CDI == "" && IPCA == "") {
      axios('http://localhost:3000/indicadores', {
      'method': 'GET',
    }).then((res) => {
      setIPCA(res.data[1].valor)
    }).catch((e) => {
      console.log(e)
    });
    axios('http://localhost:3000/indicadores', {
      'method': 'GET',
    }).then((res) => {
      setCDI(res.data[0].valor)
    }).catch((e) => {
      console.log(e)
    });
  }
  }, [])

  useEffect(() => {
    if  ( formData.initial !== "" &&
          formData.monthly !== "" &&
          formData.percent.replace(/\D/g, "") !== "" &&
          formData.month.replace(/\D/g, "") !== "") {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
                              .replace(/(\d)(\d{2})$/, "$1,$2")
                              .replace(/(?=(\d{3})+(\D))\B/g, ".")
                              .replace(/^R\$ /, "");
    e.target.value = `R$ ${value}`
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const clear = () => {
    setFormData({
      ...formData,
      initial: "",
      monthly: "",
      percent: "",
      month: ""
    })
    setIsValid(false)
    setState({
      ...state,
      request: false,
    });
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
      setState({
        ...state,
        request: isValid,
        madeNewRequest: true
      });
    }

  return (
  <form className={styles.form} id="form" onSubmit={handleSubmit}>
    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          id="inicial"
          name="initial" 
          type="text"
          placeholder=""
          value={formData.initial}
          onChange={(e) => handleChange(e)}/>
        <span className={styles.label}>Aporte Inicial</span>
        <span className={styles.focusBg}/>
        <span className={styles.warning}>Aporte deve ser um número.</span>
      </label>
    </div>

    <div className={styles.container}>
      <label className={styles.inp}>
        <input 
          id="mensal"
          name="monthly" 
          type="text"
          placeholder=""
          value={formData.monthly}
          onChange={(e) => handleChange(e)}/>
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
          value={formData.month}
          onChange={(e) => setFormData({
            ...formData,
            month: e.target.value,
          })}
          pattern="[0-9]+"/>
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
          pattern="[0-9]+" 
          placeholder=""
          value={formData.percent}
          onChange={(e) => setFormData({
            ...formData,
            percent: e.target.value,
          })}/>
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

      <button 
        type="reset"
        className={styles.btn} 
        onClick={clear}><b>Limpar campos</b></button>

      <button 
        type="submit" 
        form="form" 
        className={isValid ? 
        [styles.btn, styles.submitBtn].join(" ") : 
        [styles.btn, styles.submitBtn, styles.notValid].join(" ")}>
        <b>Simular</b></button>
  </form>
  )
}

export default CustomForm