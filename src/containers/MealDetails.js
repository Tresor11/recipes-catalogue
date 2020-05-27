import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getImg, getArea } from '../reducers/singleMeal';

const MealDetails = props => {
  const { img, area } = props;
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
    }
  );
};

MealDetails.propTypes = {
  img: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
)(MealDetails);
