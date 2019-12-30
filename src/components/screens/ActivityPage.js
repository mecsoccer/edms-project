import React from 'react';
import { connect } from 'react-redux';
import SideNav from '../SideNav';
import Activities from '../Activities';
import '../styling/Index.css';
import '../styling/Main.css';
import { changeTab } from '../../actions';

class Dashboard extends React.Component{
  componentDidMount() {
      this.props.changeTab('activities');
  }

  render() {
    return (
      <div className="flex">
        <SideNav />
        <div className="main flex flex-ai-ct flex-jc-ct bg-color twelvecol pdt70 pdr32">
          <div className="main-container flex flex-jc-ct wrap twelvecol">
            <div className="dashboard-header twelvecol flex">Activity</div>
            <div className="recent-act-card">
                <div className="twelvecol h40 flex flex-jc-sb twelvecol">
                    <div className="card-header ten font600 lt-sp-sm"><span>RECE</span>NT ACTIVITIES</div>
                </div>
                <div>
                    <div className="ten dk-text font500">
                        <p>TODAY</p>
                        <Activities />
                    </div>
                    <div className="ten dk-text font500">
                        <p>YESTERDAY</p>
                        <Activities />
                    </div>
                </div>
            </div>
            <div className="filter-card twelvecol doc-card white-bg h350 flex wrap">
                <div className="twelvecol h40 flex flex-jc-sb twelvecol">
                    <div className="card-header ten font600 lt-sp-sm"><span>FILT</span>TER</div>
                </div>
                <div className="filter-form dk-text ten block">
                    <div className="h50 twelvecol flex flex-ai-ct flex-jc-sb">
                        <span>Department</span>
                        <select className='h30 eightcol r3'>
                            <option>Accounting</option>
                            <option>HR</option>
                            <option>Finance</option>
                            <option>Media</option>
                        </select>
                    </div>
                    <div className="h50 twelvecol flex flex-ai-ct flex-jc-sb">
                        <span>User</span>
                        <select className='h30 eightcol r3'>
                            <option>Tiwa Pumping</option>
                        </select>
                    </div>
                    <div className="h50 twelvecol flex flex-ai-ct flex-jc-sb">
                        <span>Status</span>
                        <select className='h30 eightcol r3'>
                            <option>Success</option>
                        </select>
                    </div>
                    <div className="h50 twelvecol flex flex-ai-ct flex-jc-sb">
                        <span>Date</span>
                        <div className='flex flex-jc-sb h30 eightcol'>
                            <input type="date" className="fivecol grow1 r3" />
                            <span className="date-to">to</span>
                            <input type="date" className="fivecol grow1 r3" />
                        </div>
                    </div>
                </div>
                <div className="filter-controls flex">
                    <span className="dk-text ten">clear filter</span>
                    <button className="dom-color-bg ten white-text">filter</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {currentTab: state.dashboard.current_tab};
}

export default connect(mapStateToProps, {changeTab})(Dashboard);
