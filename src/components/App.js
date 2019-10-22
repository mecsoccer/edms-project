import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Dashboard from './Dashboard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
