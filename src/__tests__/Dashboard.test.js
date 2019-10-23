import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import axios from 'axios';
import { createStore } from 'redux';
import Dashboard from '../components/Dashboard';
import reducers from '../reducers/index';
 
jest.mock('axios');

const store = createStore(reducers);

describe('Dashboard component', () => {
  describe('when loaded', () => {
    it('should be rendered on the page', () => {
      const getSpy = jest.spyOn(axios, 'get');
      shallow(<Provider store={store}><Dashboard/></Provider>);
    });
  });
});