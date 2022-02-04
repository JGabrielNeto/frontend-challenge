import React from "react";
import styles from "../../styles/CustomTextInput.module.sass";

const CustomTextInput: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <label htmlFor="inp" className={styles.inp}>
        <input type="text" id="inp" placeholder="&nbsp;" />
        <span className={styles.label}>{props.children}</span>
        <span className={styles.focusBg}></span>
      </label>
    </div>
  )
}

export default CustomTextInput