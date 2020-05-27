import React from 'react';
import { connect } from 'react-redux';
import MealsList from './MealsList';
import MealDetails from './MealDetails';

const Selector = props => {
  const { selected } = props;
  if (selected) {
    return (<MealDetails />);
  }
  return (<MealsList />);
};

const mapStateToProps = state => (state);

export default connect(
  mapStateToProps,
)(Selector);
