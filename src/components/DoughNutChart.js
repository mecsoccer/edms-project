import React from 'react';
import Chart from 'chart.js';

class GroupedBars extends React.Component{
    componentDidMount() {
        this.initializeChart();
    }

    initializeChart(){
			var ctx = document.getElementById("doughnut-chart");
			var myChart = new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ["Approved", "Rejected", "Pending"],
					datasets: [{
						label: '# of Tomatoes',
						data: [32, 15, 12],
						backgroundColor: ["#82B1ED", "#277D61","#FFAD0D"],
						borderColor: ["#82B1ED", "#277D61","#FFAD0D"],
						borderWidth: 1,
						borderAlign: 'inner',
					}]
				},
				options: {
					cutoutPercentage: 70,
					responsive: false,
			
				}
			});
    }

    render() {
        return (
            <div>
				<div className="h60 pdtrl28 flex twelvecol">
					<div className="card-header ten font600 lt-sp-sm"><span>DOCU</span>MENTS SUMMARY</div>
				</div>
                <div className="flex flex-ai-ct flex-jc-ct">
					<canvas id="doughnut-chart" width="243" height="210"></canvas>
				</div>
            </div>
        );
    }
}

export default GroupedBars;
