import React from 'react';

class SubHeader extends React.Component{
  render() {
    return (
      <div className="card-header ten font600 lt-sp-sm">{this.props.children}</div>
    );
  }
}

export default SubHeader;
