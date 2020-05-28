/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/meal.css';

const Meal = ({
  src, name,
}) => (

  <div className="meal-preview shadow">
    <img className="bg-img" src={src} alt={name} />
    <h1 className="top-text">{name}</h1>
  </div>
);

Meal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Meal;
