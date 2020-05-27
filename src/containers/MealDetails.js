import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import fetchMeal from '../actions/fetchSingle';
import { getImg, getArea, getIntructions } from '../reducers/singleMeal';

const MealDetails = props => {
  const { img, area, intructions } = props;
  console.log(intructions);
  return (
    <div>
      <h1>{area}</h1>
      <img src={img} alt={area} />
    </div>
  );
};

const mapStateToProps = state => {
  const { singleMeal } = state;
  return (
    {
      img: getImg(singleMeal.details),
      area: getArea(singleMeal.details),
      intructions: getIntructions(singleMeal.details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
};

MealDetails.propTypes = {
  img: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps,
)(MealDetails));
