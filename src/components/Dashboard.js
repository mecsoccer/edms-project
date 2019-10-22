import React from 'react';
import SideBar from './SideNav';
import Card from './Card';
import DocumentTile from './DocumentTile';
import DashboardItem from './DashboardItem';
import DoughNutChart from './DoughNutChart';
import GroupedBars from './GroupedBars';
import PendingDocs from './PendingDocs';
import SubHeader from './SubHeader';
import {ReactComponent as DepartmentIcon} from './images/Department-Icon.svg';
import {ReactComponent as DocumentIcon} from './images/Document-Icon.svg';
import {ReactComponent as MemberIcon} from './images/Member-Icon.svg';
import {ReactComponent as UnitIcon} from './images/Unit-Icon.svg';
import './styling/Index.css';
import './styling/Main.css';
import Activities from './Activities';

class Dashboard extends React.Component{
  render() {
    return (
      <div className="flex">
        <SideBar />
        <div className="main flex flex-ai-ct flex-jc-ct bg-color twelvecol pdt70 pdr32">
          <div className="main-container flex flex-ai-ct flex-jc-ct wrap twelvecol">
            <div className="dashboard-header twelvecol flex">Dashboard</div>
            <div className="dashboard-contents flex twelvecol">
              <div className="eightcol flex">
                <DashboardItem detail={{icon:<DepartmentIcon />,title:"Departments",qty:5}} />
                <DashboardItem detail={{icon:<MemberIcon />,title:"Members",qty:24}} />
                <DashboardItem detail={{icon:<UnitIcon />,title:"Units",qty:3}} />
                <DashboardItem detail={{icon:<DocumentIcon />,title:"Documents",qty:'12,097'}} />
              </div>
              <div className="fourcol flex flex-ai-ct flex-jc-rt">
                <button className="non-trans-btn white-text dom-color-bg capitalize pointer flex-baseline">+ New Document</button>
              </div>
            </div>
            <div className="doc-summary twelvecol flex">
              <div className="flex h295 white-bg twelvecol">
                <div className="doc-pend eightcol">
                  <PendingDocs />
                </div>
                <div className="doc-sum fourcol">
                  <DoughNutChart />
                </div>
              </div>
            </div>
            <div className="flex flex-ai-ct flex-jc-ct twelvecol">
              <Card detail={{left:<SubHeader><span>RECE</span>NT DOCUMENT</SubHeader>}}>
                <div className="flex wrap h240">
                  <DocumentTile detail={{title: "Alpha deta Business Proposal", time: "Today, 14:30pm"}} />
                  <DocumentTile detail={{title: "Alpha deta Business Proposal", time: "Today, 14:30pm"}} />
                  <DocumentTile detail={{title: "Alpha deta Business Proposal", time: "Today, 14:30pm"}} />
                  <DocumentTile detail={{title: "Alpha deta Business Proposal", time: "Yesterday, 14:30pm"}} />
                </div>
              </Card>
              <Card detail={{left:<SubHeader><span>RECE</span>NT ACTIVITIES</SubHeader>,right:<span className="dom-color ten bold pointer">View All</span>}}>
                <Activities />
              </Card>
              <Card detail={{left:<SubHeader><span>ANAL</span>YSIS</SubHeader>,right:<select className="trans-btn"><option>Document flow by dept</option></select>}}>
                <GroupedBars />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
