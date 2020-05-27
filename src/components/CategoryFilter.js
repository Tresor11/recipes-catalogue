import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onChange,value }) => {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
  return (
    <div className="filter">
      <p>Category Filter</p>
      <select onChange={onChange} value={value} className="h-40 w-50">
        <option value="ALL">All</option>
        {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
