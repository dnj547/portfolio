import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react.js';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChartWithCustomization extends React.Component {
    render() {
    console.log(this.props.pieState.responsesAndVotePercentages);
        const options = {
            animationEnabled: true,
            exportFileName: "New Year Resolutions",
            backgroundColor: "transparent",
            data: [{
                type: "pie",
                showInLegend: false,
                legendText: "{label}",
                toolTipContent: "{label}: <strong>{y}%</strong>",
                indexLabel: "{y}% {label}",
                indexLabelPlacement: "inside",
                indexLabelFontSize: 16,
                dataPoints: [
                    { y: parseInt(this.props.pieState.responsesAndVotePercentages[0][1], 10), label: this.props.pieState.responsesAndVotePercentages[0][0] },
                    { y: parseInt(this.props.pieState.responsesAndVotePercentages[1][1], 10), label: this.props.pieState.responsesAndVotePercentages[1][0] },
                ]
            }]
        }

        return (
        <div >
          <CanvasJSChart options={options}/>
        </div>
        );
    }
}

export default PieChartWithCustomization;
