import React from 'react';
import GroupedBars from './GroupedBars';
import './styling/Index.css';
import './styling/Main.css';
import SideNav from './SideNav';

class AnalysisPage extends React.Component {
    componentDidMount() {
        this.drawOnCanvas('doc-flow-dep');
        this.drawOnCanvas('arch-per-dep');
    }

    drawOnCanvas(canvasId) {
        const circles = [
            [135, 90, 50, 1.6 * Math.PI, 0.75*Math.PI, true, '#F16548', 220, 5, 'Media'],
            [135, 90, 55, 1.3 * Math.PI, 0.3 * Math.PI, true, '#F1963A', 240, 14, 'Human Resources'],
            [135, 90, 60, Math.PI, 0, true, '#0AB39C', 260, 18, 'Account'],
            [135, 90, 65, 1.5 * Math.PI, 0.5 * Math.PI, false, '#82B1ED', 280, 23, 'Finance'],
            [135, 90, 65, 1.7 * Math.PI, 0.7 * Math.PI, false, '#82B1ED', 0, 0, 'Finance'],
            [135, 90, 30, 0, 2 * Math.PI, true, 'white', 0, 0, '']
        ];
        circles.forEach(circle => {
            this.draw(circle[0],circle[1],circle[2],circle[3],circle[4],circle[5],circle[6], circle[7], circle[8], circle[9], canvasId)
        });
    }

    draw = (x,y,r,s,f,acl,cl,tY,z,txt,canvasId) => {
        const canvas = document.querySelector(`#${canvasId}`);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.fillStyle = cl;
            ctx.arc(x,y,r,s,f,acl);
            ctx.fill();
            ctx.moveTo(10, 50);
        }
        this.drawText(cl, tY, z, txt, canvasId);
    }

    drawText = (cl, y, z, txt, canvasId) => {
        const canvas = document.getElementById(canvasId);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.font = '10px serif';
            ctx.fillStyle = '#30363D';
            ctx.fillText(txt, 50, y);
            ctx.fillText(z, 200, y);
            ctx.fillStyle = cl;
            ctx.arc(10, y - 5, 5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.moveTo(10,50);
        }
    }

    render() {
        return (
            <div className="flex twelvecol">
                <SideNav />
                <div className="centered">
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
        );
    }
}

export default AnalysisPage;
