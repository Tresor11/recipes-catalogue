import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MealPreview from '../components/MealPreview';
import CategoryFilter from '../components/CategoryFilter';
import fetchAllMeals from '../actions/fetchAll';
import fetchMeal from '../actions/fetchSingle';
import { getProductsError, getProducts, getProductsPending } from '../reducers/allMeals';
import { UPDATE_CATEGORY, SELECT_MEAL } from '../actions/index';

const MealsList = props => {
  const {
    products, error, pending, category, fetchAllMeals, addFilter, select, fetchMeal,
  } = props;

  const handleFilterChange = evt => {
    const newCategory = evt.target.value;
    addFilter(evt.target.value);
    fetchAllMeals(newCategory);
  };
  const handleSelect = id => {
    fetchMeal(id);
    select(true);
  };

  useEffect(() => {
    fetchAllMeals(category);
  }, []);
  const shouldComponentRender = () => {
    if (pending === true || products.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) { return <h1> loading...</h1>; }
  return (
    <div className="product-list-wrapper">
      {error && <span className="product-list-error">error</span>}
      <h1>
        {' '}
        {category}
        {' '}
      </h1>
      <CategoryFilter onChange={handleFilterChange} value={category} />
      {products.map(el => (
        <MealPreview
          onClick={handleSelect}
          key={el.idMeal}
          src={el.strMealThumb}
          name={el.strMeal}
          id={el.idMeal}
        />
      ))}
    </div>
  );
};

MealsList.propTypes = {
  pending: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  error: PropTypes.string,
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  fetchMeal: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      error: getProductsError(allMeals),
      products: getProducts(allMeals),
      pending: getProductsPending(allMeals),
      category: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
  select: SELECT_MEAL,
  fetchMeal,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
