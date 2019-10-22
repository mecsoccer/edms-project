import React from 'react';

class DashboardItem extends React.Component{
  render() {
    return (
      <div className="items threecol flex flex-ai-ct flex-jc-ct">
        <div className="item-container flex wrap">
          <div className="item-icon ">{this.props.detail.icon}</div>
          <div>
            <div className="item-title ten pdtb5 twelvecol ">{this.props.detail.title}</div>
            <div className="item-qty font600 ten pdtb5">{`${this.props.detail.qty} ${this.props.detail.title}`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardItem;
