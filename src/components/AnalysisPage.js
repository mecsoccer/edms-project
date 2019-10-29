import React from 'react';
import GroupedBars from './GroupedBars';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styling/Index.css';
import './styling/Main.css';
import SideNav from './SideNav';

class AnalysisPage extends React.Component {
    componentDidMount() {
        const companyData = this.transformData([
            {size: 4, name: 'media', color: '#F16548'},
            {size: 8, name: 'Human Resources', color: '#F1963A'},
            {size: 13, name: 'Account', color: '#0AB39C'},
            {size: 35, name: 'Finance', color: '#82B1ED'},
        ]);
        this.drawOnCanvas(companyData, 'doc-flow-dep');
        this.drawOnCanvas(companyData, 'arch-per-dep');
        this.props.changeTab('dashboard');
    }

    transformData(data) {
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
        let j = 40;
        companyData.forEach(data => {
            let end = s - data.percentage * 2 * pi;
            if (end < 0) end = 2 * pi + end;
            this.drawArc(s, end, data.color, canvasId, j);
            s = end;
            j += 10;
        });

        this.drawCircle('white', canvasId);

        let i = 220;

        companyData.forEach(data => {
            this.drawText(data.color, i, data.name, data.size, canvasId);
            i += 20;
        });
    }

    drawArc = (s,f,cl,canvasId,lw) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.strokeStyle = cl;
            ctx.arc(135,90,35,s,f,true);
            ctx.lineWidth = lw;
            ctx.stroke();
            ctx.moveTo(10, 50);
            
        }
    }

    drawCircle = (cl,canvasId) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.fillStyle = cl;
            ctx.arc(135, 90, 35, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.moveTo(10, 50);
        }
    }

    drawText = (color, y, txt, dataSize, canvasId) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.font = '12px poppins';
            ctx.fillStyle = '#30363D';
            ctx.fillText(txt, 50, y);
            ctx.fillText(dataSize, 200, y);
            ctx.fillStyle = color;
            ctx.arc(10, y - 5, 5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.moveTo(10,50);
        }
    }

    render() {
        return (
            <div className="flex twelvecol">
                <SideNav />
                <div className="centered main">
                    <div className="fit centered">
                        <div className="analysis-con">
                            <div className="analysis-card doc-card white-bg h350 flex wrap">
                                <div className="h80 flex flex-jc-sb twelvecol">
                                    <div className="card-header ten font600 lt-sp-sm"><span>ANAL</span>YSIS</div>
                                    <div className="flex flex-jc-rt"><select className="trans-btn"><option>Document flow by dept</option></select></div>
                                </div>
                                <GroupedBars />
                            </div>
                            <div className="analysis-card doc-card white-bg sixcol h440 flex wrap">
                                <div className="h40 flex flex-jc-sb twelvecol">
                                    <div className="card-header ten font600 lt-sp-sm"><span>ANAL</span>YSIS</div>
                                    <div className="flex flex-jc-rt"><select className="trans-btn"><option>User Distribution</option></select></div>
                                </div>
                                <div>
                                    <canvas id="doc-flow-dep" width="270" height="350" />
                                </div>
                            </div>
                        </div>
                        <div className="analysis-card weird doc-card white-bg fit h440 flex wrap">
                            <div className="h40 flex flex-jc-sb twelvecol">
                                <div className="card-header ten font600 lt-sp-sm"><span>ANAL</span>YSIS</div>
                                <div className="flex flex-jc-rt"><select className="trans-btn"><option>Archived per dept</option></select></div>
                            </div>
                            <div>
                                <canvas id="arch-per-dep" width="270" height="350" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {changeTab})(AnalysisPage);
