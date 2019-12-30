import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import DashboardPage from './screens/DashboardPage';
import AnalysisPage from './screens/AnalysisPage';
import ActivityPage from './screens/ActivityPage';
import SignupPage from './screens/SignupPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/analysis" exact component={AnalysisPage} />
            <Route path="/activity" exact component={ActivityPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
