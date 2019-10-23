import React from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import { ReactComponent as SettingsIcon} from './images/Settings.svg';
import UserPhoto from './images/Photo.png';
import { changeTab } from '../actions';

class SideNav extends React.Component{
  render() {
    return (
      <div className="sidenav white-bg threecol">
        <div className="sidenav-user-div twelvecol">
          <div className="user-photo flex flex-ai-ct flex-jc-ct"><img src={UserPhoto} alt="pic" /></div>
          <div className="flex wrap flex-ai-ct flex-jc-ct twelvecol">
            <div className="user-name twelvecol align-center">Jaohn Samue</div>
            <div className="user-role twelvecol align-center">Front Desk Officer</div>
            <div className="user-dept twelvecol align-center">Finance</div>
          </div>
        </div>
        <div className="sidenav-tabs">
          <Tabs />
        </div>
        <div>
          <div className="tab flex twelve flex-ai-ct h50">
            <div className="tab-icon"><SettingsIcon /></div>
            <div>Log Out</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { current_tab: state.dashboard.current_tab };
}

export default connect(mapStateToProps, {changeTab})(SideNav);
