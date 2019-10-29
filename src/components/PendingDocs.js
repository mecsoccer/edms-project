import React from 'react';
import SubHeader from './SubHeader';

class PendingDocs extends React.Component{
  renderPendingDoc(doc) {
    return (
      <div className="flex flex-ai-ct pdrl40 twelvecol accent-fg-1 ten h40" key={doc.id}>
        <div className="twenty-percent">{doc.name}</div>
        <div className="twenty-percent">{doc.class}</div>
        <div className="twenty-percent">{doc.due}</div>
        <div className="twenty-percent">{doc.owner}</div>
        <div className="twenty-percent"><span className="dom-color ten bold pointer">Review</span></div>
      </div>
    );
  }

  render() {
    const pendingDocs = this.props.detail.filter(doc => doc.status === 'pending');
    return (
      <div className="doc-card white-bg twelvecol flex wrap">
        <div className="h80 pdtrl28 flex flex-jc-sb twelvecol">
          <SubHeader><span>PEND</span>ING DOCUMENTS</SubHeader>
          <div className="sixcol flex flex-jc-rt">
              <span className="dom-color ten bold pointer">View All</span>
          </div>
        </div>
        <div className="twelvecol">
          <div className="flex flex-ai-ct pdrl40 twelvecol highlighted-bg dk-text ten h40">
            <div className="twenty-percent">File name</div>
            <div className="twenty-percent">Class</div>
            <div className="twenty-percent">Due Date</div>
            <div className="twenty-percent">Owner</div>
            <div className="twenty-percent"></div>
          </div>
          {pendingDocs.map(doc => this.renderPendingDoc(doc))}
        </div>
      </div>
    );
  }
}

export default PendingDocs;
