import React from 'react';
import Chart from 'chart.js';

class GroupedBars extends React.Component{
    componentDidMount() {
        this.initializeChart();
    }

    initializeChart(){
        const myChart = new Chart(document.getElementById("bar-chart-grouped"), {
            type: 'bar',
            data: {
              labels: ["Acc", "HR", "Finan..", "media"],
              datasets: [
                {
                  label: "Pending",
                  backgroundColor: "#E1EAF5",
                  data: [2,3,4,3,0]
                }, {
                  label: "Approved",
                  backgroundColor: "#82B1ED",
                  data: [6,10,4,12,0]
                }
              ]
            },
            options: {
            }
        });
    }

    render() {
        return (
            <div>
                <canvas id="bar-chart-grouped" width="243" height="220"></canvas>
            </div>
        );
    }
}

export default GroupedBars;
