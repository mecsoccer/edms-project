import React from 'react';
import { ReactComponent as HomeIcon} from './images/Home.svg';
import { ReactComponent as DocIcon} from './images/Bookmark.svg';
import { ReactComponent as ActivityIcon} from './images/Notification.svg';
import { ReactComponent as ArchiveIcon} from './images/Archive.svg';
import { ReactComponent as SettingsIcon} from './images/Settings.svg';
import UserPhoto from './images/Photo.png';

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
          <div className="flex twelve bold main-tab flex-ai-ct h50">
            <div className="tab-icon"><HomeIcon /></div>
            <div >Dashboard</div>
          </div>
          <div className="tab flex twelve flex-ai-ct h50">
            <div className="tab-icon"><DocIcon /></div>
            <div>Documents</div>
          </div>
          <div className="tab flex twelve flex-ai-ct h50">
            <div className="tab-icon"><ActivityIcon /></div>
            <div>Activities</div>
            <div className="activity-count white-text dom-color-bg">12</div>
          </div>
          <div className="tab flex twelve flex-ai-ct h50">
            <div className="tab-icon"><ArchiveIcon /></div>
            <div>Archive</div>
          </div>
          <div className="tab flex twelve flex-ai-ct h50">
            <div className="tab-icon"><SettingsIcon /></div>
            <div>Settings</div>
          </div>
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

export default SideNav;
