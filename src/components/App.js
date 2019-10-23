import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Dashboard from './Dashboard';
import AnalysisPage from './AnalysisPage';
import ActivityPage from './ActivityPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/analysis" exact component={AnalysisPage} />
            <Route path="/activity" exact component={ActivityPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
