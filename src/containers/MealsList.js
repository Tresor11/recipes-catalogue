import React, { useEffect } from 'react';
import './list.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../components/MealPreview';
import CategoryFilter from '../components/CategoryFilter';
import fetchAllMeals from '../actions/fetchAll';
import fetchMeal from '../actions/fetchSingle';
import { getProductsError, getProducts, getProductsPending } from '../reducers/allMeals';
import { UPDATE_CATEGORY } from '../actions/index';

const MealsList = props => {
  console.log(props);
  const {
    products, error, pending, fetchAllMeals, addFilter, match, fetchMeal, current
  } = props;

  const { category } = match.params;

  const handleFilterChange = evt => {
    const newCategory = evt.target.value;
    addFilter(evt.target.value);
    fetchAllMeals(newCategory);
  };
  const handleSelect = id => {
    fetchMeal(id);
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
        {current}
        {' '}
      </h1>
      <CategoryFilter onChange={handleFilterChange} value={current} />
      {products.map(el => (
        <Link to={`/meal/${el.id}`} key={el.id}>
          <MealPreview
            onClick={handleSelect}
            src={el.strMealThumb}
            name={el.strMeal}
            id={el.idMeal}
          />
        </Link>
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
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
  fetchMeal,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
