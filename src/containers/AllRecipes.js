import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import fetchAllMeals from '../actions/fetchAll';
import { getProductsPending } from '../helper/index';
import { UPDATE_CATEGORY } from '../actions/index';
import MealsList from './RecipesList';

const AllMeals = props => {
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
      <h1 className="text-c g-text">
        {' '}
        Available Recipes For
        {' '}
        <br />
        {current || category}
      </h1>
      <MealsList category={category} />
    </div>
  );
};


AllMeals.propTypes = {
  category: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.objectOf().isRequired,
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
