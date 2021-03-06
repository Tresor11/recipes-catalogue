/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import AllCategories from '../../containers/AllCategories';
import store from '../../reducers/index';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Provider store={store}><AllCategories /></Provider>);
  return component;
};

describe('It should not visible When the app loads', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should not render any header', () => {
    expect(component.find('div').length).toBe(0);
  });

  it('should not render any span element', () => {
    expect(component.find('span').length).toBe(0);
  });
});
