import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDepartments, fetchActivities, fetchDocuments, changeTab } from '../actions';
import SideNav from './SideNav';
import Card from './Card';
import DocumentTile from './DocumentTile';
import DashboardItem from './DashboardItem';
import DoughNutChart from './DoughNutChart';
import GroupedBars from './GroupedBars';
import PendingDocs from './PendingDocs';
import {ReactComponent as DepartmentIcon} from './images/Department-Icon.svg';
import {ReactComponent as DocumentIcon} from './images/Document-Icon.svg';
import {ReactComponent as MemberIcon} from './images/Member-Icon.svg';
import {ReactComponent as UnitIcon} from './images/Unit-Icon.svg';
import './styling/Index.css';
import './styling/Main.css';
import Activities from './Activities';

class Dashboard extends React.Component{
  componentDidMount() {
    this.props.fetchDepartments();
    this.props.fetchActivities();
    this.props.fetchDocuments();
    this.props.changeTab('dashboard');
  }

  renderRecentDocs() {
    return this.props.documents.filter(doc => Number(doc.id) < 5);
  }

  render() {
    return ( 
      <div className="flex">
        <SideNav />
        <div className="main flex flex-ai-ct flex-jc-ct bg-color twelvecol pdt70 pdr32">
          <div className="main-container flex flex-ai-ct flex-jc-ct wrap twelvecol">
            <div className="dashboard-header twelvecol flex">Dashboard</div>
            <div className="dashboard-contents flex twelvecol">
              <div className="eightcol flex">
                <DashboardItem detail={{icon:<DepartmentIcon />, title: "Departments",qty: this.props.departments.length}} />
                <DashboardItem detail={{icon:<MemberIcon />,title:"Members",qty:24}} />
                <DashboardItem detail={{icon:<UnitIcon />,title:"Units",qty:3}} />
                <DashboardItem detail={{icon:<DocumentIcon />,title:"Documents",qty: this.props.documents.length}} />
              </div>
              <div className="fourcol flex flex-ai-ct flex-jc-rt">
                <button className="non-trans-btn white-text dom-color-bg capitalize pointer flex-baseline">+ New Document</button>
              </div>
            </div>
            <div className="doc-summary twelvecol flex">
              <div className="flex h295 white-bg twelvecol">
                <div className="doc-pend eightcol">
                  <PendingDocs detail={this.props.documents} />
                </div>
                <div className="doc-sum fourcol">
                  <DoughNutChart />
                </div>
              </div>
            </div>
            <div className="flex flex-ai-ct flex-jc-ct twelvecol">
              <Card detail={{initial:"RECE",others:"NT DOCUMENT"}}>
                <div className="flex wrap h240">
                  {this.renderRecentDocs().map((doc) => {
                    return <DocumentTile key={doc.id} detail={{title: doc.description, time: doc.due}} />})
                  }
                </div>
              </Card>
              <Card detail={{initial:"RECE",others:"NT ACTIVITIES",right:<Link to="/activity"><span className="dom-color ten bold pointer">View All</span></Link>}}>
                <Activities />
              </Card>
              <Card detail={{initial:"ANAL",others:"YSIS",right:<select className="trans-btn"><option>Document flow by dept</option></select>}}>
                <Link to="/analysis">
                  <GroupedBars />
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    departments: state.department.departments,
    activities: state.activity.activities,
    documents: state.document.documents,
  }
};

export default connect(
  mapStateToProps,
  {
    fetchDepartments,
    fetchActivities,
    fetchDocuments,
    changeTab,
  })(Dashboard);
