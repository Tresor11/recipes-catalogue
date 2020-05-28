import React from 'react';
import PropTypes from 'prop-types';
import '../css/category.css';

const Category = ({
  src, name, description,
}) => (

  <div className="category shadow">
    <img className="bg-img" src={src} alt={description} />
    <h1 className="top-text">{name}</h1>
  </div>
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Category;
