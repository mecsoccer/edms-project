import React from 'react';
import {ReactComponent as FileIcon} from './images/File-Icon.svg';

class DocumentTile extends React.Component{
  render() {
    return (
      <div className="flex wrap">
        <div className="file-icon "><FileIcon /></div>
        <div>
          <div className="item-qty font600 lt-sp-sm font600 ten twelvecol">{this.props.detail.title}</div>
          <div className="file-time lt-sp-sm eight">{this.props.detail.time}</div>
        </div>
      </div>
    );
  }
}

export default DocumentTile;
