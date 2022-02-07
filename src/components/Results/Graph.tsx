import styles from '../../styles/Graph.module.sass'
import * as React from 'react'
import * as Highcharts from 'highcharts'
const ReactHighcharts = require('react-highcharts')


const options: Highcharts.Options = {
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
        categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
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
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        pointWidth: 36,
        color: "#f58b47",
        type: 'column',
        name: 'Com aporte',
        data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    }, {
        pointWidth: 36,
        color: 'black',
        type: 'column',
        name: 'Sem aporte',
        data: [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12]
    }]
}

const Graph = (props: any) => {
    

    return (
    <ReactHighcharts config={options} />    
    )
}

export default Graph
