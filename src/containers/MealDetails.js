import React from 'react';
import { connect } from 'react-redux';
import { getImg, getArea } from '../reducers/singleMeal';

const MealDetails = props => {
  const { img, area } = props;
  console.log(props);
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

export default connect(
  mapStateToProps,
)(MealDetails);
