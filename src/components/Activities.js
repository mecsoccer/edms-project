import React from 'react';
import {ReactComponent as Avatar} from './images/Avatar.svg';
import {ReactComponent as SuccessIcon} from './images/SuccessIcon.svg';
import {ReactComponent as Alert} from './images/Alert.svg';

class Activities extends React.Component{
  renderActivity(detail) {
    return (
      <div className="h120" key={detail.id}>
        <div className="flex ten h30">
            <div className="flex twelvecol h24 flex-jc-sb flex-ai-ct flex-jc-ct">
                <div className="msg-icon flex flex-ai-ct flex-jc-ct">{(detail.action==='approved') ? <SuccessIcon /> : <Alert />}</div>
                <div className="sixty-percent bold">{detail.title}</div>
                <div>{detail.time}</div>
            </div>
        </div>
        <div className="pdl12">
            <div className="flex bd-lt pdl12 h72">
                <div className="avatar mgr8"><Avatar /></div>
                <div className="ten lh-20 item-title">
                {detail.user} has {detail.action}
                <span className="bold"> {detail.doc} </span>
                {detail.comment? 'with a comment' : ''}
                </div>
            </div>
        </div>
      </div>
    );
  }

  render() {
    const recentActivities = [
        {id:1, title: 'Document Approval', user: 'Segun Oni', action: 'approved',
            doc: 'Business proposal document.docx', time: '4 mins ago', comment: false},
        {id:2, title: 'Document Rejection', user: 'Segun Oni', action: 'rejected',
            detail: 'Segun Oni has rejected', doc: 'Campaign Proposal Slide.ppt', time: '9 mins ago', comment: true }
    ];
    return (
      <div className="h240">
        {recentActivities.map(activity => this.renderActivity(activity))}
      </div>
    );
  }
}

export default Activities;
