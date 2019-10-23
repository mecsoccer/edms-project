import React from 'react';

class Card extends React.Component{
  render() {
    return (
      <div className="doc-card white-bg card-sm-ht fourcol flex wrap">
        <div className="h80 flex flex-jc-sb twelvecol">
          <div className="card-header ten font600 lt-sp-sm"><span>{this.props.detail.initial}</span>{this.props.detail.others}</div>
          <div className="flex flex-jc-rt">{this.props.detail.right}</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
