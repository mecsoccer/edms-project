import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import axios from 'axios';
import { createStore } from 'redux';
import AnalysisPage from '../components/AnalysisPage';
import reducers from '../reducers/index';
 
jest.mock('axios');

const store = createStore(reducers);

describe('ActivityPage component', () => {
  describe('when loaded', () => {
    it('should be rendered on the page', () => {
      const getSpy = jest.spyOn(axios, 'get');
      shallow(<Provider store={store}><AnalysisPage/></Provider>);
    });
  });
});