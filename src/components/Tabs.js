import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as HomeIcon} from './images/Home.svg';
import { ReactComponent as DocIcon} from './images/Bookmark.svg';
import { ReactComponent as ActivityIcon} from './images/Notification.svg';
import { ReactComponent as ArchiveIcon} from './images/Archive.svg';
import { ReactComponent as SettingsIcon} from './images/Settings.svg';
import { changeTab } from '../actions';
import { Link } from 'react-router-dom';


class Tabs extends React.Component{
    onTabClick = (e) =>{
        console.log('yo', e)
        this.props.changeTab(e.innerHTML);
    }

    render() {
        const tabs = [
            {icon: <HomeIcon />, name: 'dashboard', link: '/'},
            {icon: <DocIcon />, name: 'documents', link: '/'},
            {icon: <ActivityIcon />, name: 'activities', link: '/activity'},
            {icon: <ArchiveIcon />, name: 'archive', link: '/'},
            {icon: <SettingsIcon />, name: 'settings', link: '/'}
          ];
        return (
            tabs.map(tab => {
                if (tab.name === this.props.current_tab) {
                  return (
                    <div onClick={this.props.onTabClick} className="flex twelve bold main-tab flex-ai-ct h50">
                      <div className="tab-icon">{tab.icon}</div>
                      <Link to={tab.link}><div className="capitalize">{tab.name}</div></Link>
                    </div>
                  )
                }
                return (
                  <div className="tab flex twelve flex-ai-ct h50">
                    <div className="tab-icon">{tab.icon}</div>
                    <Link to={tab.link}><div className="capitalize">{tab.name}</div></Link>
                  </div>
                );
              })
        );
    }
}

const mapStateToProps = (state) => {
    return { current_tab: state.dashboard.current_tab };
  }

export default connect(mapStateToProps, {changeTab})(Tabs);
  
