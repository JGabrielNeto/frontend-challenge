import Card from "./Card"
import styles from "../../styles/Results.module.sass"
import Graph from "./Graph"
const Results: React.FC = () => {
    


    return (
        <div className={styles.container}>
            <h2>Resultados da simulação</h2>
            <Card>
                <b>Test Card</b>
                <p>R$ 14.000,00</p>
            </Card>
            <Card>
                <b>Test Card</b>
                <p>R$ 14.000,00</p>
            </Card>
            <Card>
                <b>Test Card</b>
                <p>R$ 14.000,00</p>
            </Card>
            <Card>
                <b>Test Card</b>
                <p>R$ 14.000,00</p>
            </Card>
            <Card>
                <b>Test Card</b>
                <p>R$ 14.000,00</p>
            </Card>
            <Card>
                <b>Test Card</b>
                <p>R$ 14.000,00</p>
            </Card>
            <Graph/>
        </div>
    )
}

export default Results