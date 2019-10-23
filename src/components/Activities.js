import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Avatar} from './images/Avatar.svg';
import {ReactComponent as SuccessIcon} from './images/SuccessIcon.svg';
import {ReactComponent as Alert} from './images/Alert.svg';
import { fetchActivities } from '../actions';

class Activities extends React.Component{
  componentDidMount(){
    this.props.fetchActivities()
  }

  renderActivity(detail) {
    return (
      <div className="h120" key={detail.id}>
        <div className="flex ten h30">
            <div className="flex twelvecol h24 flex-jc-sb flex-ai-ct flex-jc-ct">
                <div className="msg-icon flex flex-ai-ct flex-jc-ct">{(detail.status === 'approved') ? <SuccessIcon /> : <Alert />}</div>
                <div className="sixty-percent bold">{detail.title}</div>
                <div>{detail.time}</div>
            </div>
        </div>
        <div className="pdl12">
            <div className="flex bd-lt pdl12 h72">
                <div className="avatar mgr8"><Avatar /></div>
                <div className="ten lh-20 item-title">
                {detail.user} has {detail.action}
                <span className="bold"> {detail.document} </span>
                {detail.comment? 'with a comment' : ''}
                </div>
            </div>
        </div>
      </div>
    );
  }

  render() {
    const recentActivities = this.props.activities;
    return (
      <div className="h240">
        {recentActivities.map(activity => this.renderActivity(activity))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { activities: state.activity.activities }
};

export default connect(mapStateToProps, {fetchActivities})(Activities);
