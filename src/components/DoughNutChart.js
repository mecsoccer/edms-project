import React from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { fetchDocuments } from '../actions';

class GroupedBars extends React.Component{
    componentDidMount() {
		this.initializeChart();
		this.props.fetchDocuments();
	}
	
	componentDidUpdate() {
		this.initializeChart();
	}

    initializeChart(){
		const approvedDocs = this.props.documents.filter(doc => doc.status === 'approved').length;
		const rejectedDocs = this.props.documents.filter(doc => doc.status === 'rejected').length;
		const pendingDocs = this.props.documents.filter(doc => doc.status === 'pending').length;

		const ctx = document.getElementById("doughnut-chart");
		const myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["Approved", "Rejected", "Pending"],
				datasets: [{
					label: '# of Tomatoes',
					data: [approvedDocs, pendingDocs, rejectedDocs],
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

const mapStateToProps = (state) => {
	return {documents: state.document.documents};
};

export default connect(mapStateToProps, {fetchDocuments})(GroupedBars);
