import styles from "../../styles/Card.module.sass"

const Card: React.FC = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default Card