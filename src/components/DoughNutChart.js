import React from 'react';
import { connect } from 'react-redux';
import { fetchDocuments } from '../actions';

class GroupedBars extends React.Component{
    componentDidMount() {
		this.props.fetchDocuments();
		this.drawOnCanvas(this.transformData(this.props.documents), 'doughnut-chart');
	}
	
	componentDidUpdate() {
		this.drawOnCanvas(this.transformData(this.props.documents), 'doughnut-chart');
	}

	transformData(documents) {
		const approvedDocs = documents.filter(doc => doc.status === 'approved').length;
		const rejectedDocs = documents.filter(doc => doc.status === 'rejected').length;
		const pendingDocs = documents.filter(doc => doc.status === 'pending').length;

		const data = [
            {size: approvedDocs, name: 'approved', color: '#82B1ED'},
            {size: rejectedDocs, name: 'rejected', color: '#277D61'},
            {size: pendingDocs, name: 'pending', color: "#FFAD0D"},
		];
		let sum = 0;
		
        data.forEach(d => sum += d.size);
        return data.map(d => {
          d.percentage = (d.size / sum);
          return d
        });
    }

    drawOnCanvas(companyData, canvasId) {
        const pi = Math.PI;
        let s = 1.5 * pi;
        const arcThickness = 70;
        companyData.forEach(data => {
            let end = s - data.percentage * 2 * pi;
            if (end < 0) end = 2 * pi + end;
            this.drawArc(s, end, data.color, canvasId, arcThickness);
            s = end;
        });

		this.drawCircle('white', 40, canvasId);
		this.drawCircle('rgb(255,255,255,0.8)', 45, canvasId);

		let y = 185;
		let x = 40;
		let foo = true;

        companyData.forEach(data => {
			this.drawText(data.color, foo ? x : x + 150, y, data.name, data.size, canvasId, foo ? 10 : 160);
			if (!foo) y += 20;
			foo = !foo;
		});

		this.drawCenterText(115, 70, companyData.find(data => data.name === 'pending').size, '24px', canvasId);
		this.drawCenterText(97, 90, companyData.find(data => data.name === 'pending').name, '12px', canvasId);
    }

    drawArc = (s,f,cl,canvasId,lw) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.strokeStyle = cl;
            ctx.arc(121.5,75,35,s,f,true);
            ctx.lineWidth = lw;
            ctx.stroke();
            ctx.moveTo(10, 50);
            
        }
    }

    drawCircle = (color, radius, canvasId) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(121.5, 75, radius, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.moveTo(10, 50);
        }
    }

    drawText = (color, x, y, text, dataSize, canvasId, xc) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.font = '12px poppins';
            ctx.fillStyle = '#30363D';
            ctx.fillText(text, x, y);
            ctx.fillStyle = color;
            ctx.arc(xc, y - 5, 5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.moveTo(10,50);
        }
	}
	
	drawCenterText = (x, y, text, fontSize, canvasId) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.font = `${fontSize} poppins`;
            ctx.fillStyle = '#30363D';
            ctx.fillText(text, x, y);
            ctx.moveTo(10,50);
        }
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
