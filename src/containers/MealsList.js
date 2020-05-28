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

const MealsList = props => {
  const {
    products, error, pending, fetchAllMeals, addFilter, fetchMeal, current, category
  } = props;

  useEffect(() => {
    fetchAllMeals(category);
  }, []);

  const shouldComponentRender = () => {
    if (pending === true || products.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) { return <h1> loading...</h1>; }
  return (
    <div>
      {error && <span className="product-list-error">error</span>}
      <div className="container">
        {products.map(el => (
          <Link to={`/meal/${el.idMeal}`} key={el.id}>
            <MealPreview
              src={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};


MealsList.propTypes = {
  pending: PropTypes.bool.isRequired,
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
