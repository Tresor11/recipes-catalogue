/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeDescription from '../../components/RecipeDescription';

const initial = {
  category: 'test',
  area: 'jest',
  ingredients: ['react', 'redux'],
  className: 'comp',
};

const {
  ingredients, category, area, className,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<RecipeDescription ingredients={ingredients} className={className} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render two divs', () => {
    expect(component.find('div').length).toBe(2);
  });

  it('should render 6 span element', () => {
    expect(component.find('span').length).toBe(6);
  });
});
