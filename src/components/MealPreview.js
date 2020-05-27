/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({
  src, onClick, name, id,
}) => (

  <div onClick={() => onClick(id)}>
    <h1>{name}</h1>
    <p>{id}</p>
    <img src={src} alt="" />
  </div>
);

Meal.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Meal;
