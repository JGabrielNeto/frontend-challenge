/* eslint-disable react-hooks/exhaustive-deps */
import Card from "./Card"
import styles from "../../styles/Results.module.sass"
import Graph from "./Graph"
import { useContext, useEffect, useState } from "react"
import { ValuesContext } from "../../hooks/ValuesContext"
import axios from "axios"

const Results: React.FC = () => {
    const { state, setState } = useContext(ValuesContext);
    const [checkData, setCheckData] = useState(false);
    
    useEffect(() => {
        if(state.request || state.madeNewRequest) {
            axios.get("http://localhost:3000/simulacoes/", {
                params: {
                    tipoIndexacao: state.indexing,
                    tipoRendimento: state.income
                }
            }).then((res) => {
                setState({
                    ...state,
                    results: res.data[0]
                    })
            })  
        }
        setState({
            ...state,
            madeNewRequest: false
        })
        setCheckData(state.request)
    }, [state.request, state.madeNewRequest])
    
    if(!checkData) {
        return ( <></>);
    }

    return (
        <div className={styles.container}>
            <h2>Resultados da simulação</h2>
            <Card>
                <b>Valor Final Bruto</b>
                <p>{`R$ ${state.results.valorFinalBruto}`}</p>
            </Card>
            <Card>
                <b>Alíquota do IR</b>
                <p>{`${state.results.aliquotaIR}%`}</p>
            </Card>
            <Card>
                <b>Valor pago em IR</b>
                <p>{`R$ ${state.results.valorPagoIR}`}</p>
            </Card>
            <Card>
                <b>Valor Final Líquido</b>
                <p>{`R$ ${state.results.valorFinalLiquido}`}</p>
            </Card>
            <Card>
                <b>Valor Total Investido</b>
                <p>{`R$ ${state.results.valorTotalInvestido}`}</p>
            </Card>
            <Card>
                <b>Ganho Líquido</b>
                <p>{`R$ ${state.results.ganhoLiquido}`}</p>
            </Card>
            <Graph/>
        </div>
    )
}

export default Results