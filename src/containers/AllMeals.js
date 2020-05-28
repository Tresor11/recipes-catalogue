import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../components/MealPreview';
import CategoryFilter from '../components/CategoryFilter';
import fetchAllMeals from '../actions/fetchAll';
import fetchMeal from '../actions/fetchSingle';
import { getProductsError, getProducts, getProductsPending } from '../helper/index';
import { UPDATE_CATEGORY } from '../actions/index';
import Category from '../components/CategoryPreview';
import MealsList from './MealsList';

const AllMeals = props => {
  console.log(props);
  const {
    addFilter, match, current, fetchAllMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = evt => {
    const newCategory = evt.target.value;
    addFilter(evt.target.value);
    fetchAllMeals(newCategory);
  };

  return (
    <div>
      <div className="d-flex">

        <span className="w-50">

          <CategoryFilter onChange={handleFilterChange} value={current} />
        </span>

        <span className="w-50 d-flex justify-c">
          <h1 className="m-20"> Current:</h1>
          <h1>
            {' '}
            {current || category}
            {' '}
          </h1>
        </span>
      </div>
      <MealsList category={category} />
    </div>
  );
};


MealsList.propTypes = {
  category: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMeals);
