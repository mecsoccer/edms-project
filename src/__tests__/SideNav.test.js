import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '../components/SideNav';
 
describe('app component', () => {
  it('contains a header with the "Hello world!"', () => {
    const app = shallow(<SideNav />);
    expect(app.containsMatchingElement(<div>Log Out</div>)).toEqual(true);
  });
});