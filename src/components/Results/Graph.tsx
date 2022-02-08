import * as React from 'react'
import * as Highcharts from 'highcharts'
const ReactHighcharts = require('react-highcharts')
import { ValuesContext } from '../../hooks/ValuesContext'

const Graph = (props: any) => {

    const { state } = React.useContext(ValuesContext);
    const [comAporte, setComAporte] = React.useState([1]);
    const [semAporte, setSemAporte] = React.useState([1]);

    React.useEffect(() => {
        const comAporte: number[] = Object.values(state.results.graficoValores.comAporte);
        const semAporte: number[] = Object.values(state.results.graficoValores.semAporte);
        setComAporte(comAporte);
        setSemAporte(semAporte);
    }, [state.results])

    let options: Highcharts.Options = {
        chart: {
            type: 'column',
            backgroundColor: "#efefef",
            height: 300,
        },
        title: {
            text: 'Projeção de valores',
            align: 'left',
            style: {
                color: "black"
            }
        },
        xAxis: {
            categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            title: {
                text: "Tempo (em meses)"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Valor (R$)'
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
            backgroundColor: '#efefef',
            borderColor: '#efefef',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}',
            valueDecimals: 2,
            valuePrefix: "R$ "
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: "{point.y:.2f}"
                }
            }
        },
        series: [{
            pointWidth: 36,
            color: "#f58b47",
            type: 'column',
            name: 'Com aporte',
            data: comAporte
        }, {
            pointWidth: 36,
            color: 'black',
            type: 'column',
            name: 'Sem aporte',
            data: semAporte
        }]
    }
    

    return (
    <ReactHighcharts config={options} />    
    )
}

export default Graph
