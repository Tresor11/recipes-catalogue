import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../components/MealPreview';
import fetchAllMeals from '../actions/fetchAll';
import fetchMeal from '../actions/fetchSingle';
import { getProductsError, getProducts, getProductsPending } from '../helper/index';
import { UPDATE_CATEGORY } from '../actions/index';
import Spiner from '../components/Spiner';

const MealsList = props => {
  const {
    products, pending, fetchAllMeals, category,
  } = props;

  useEffect(() => {
    fetchAllMeals(category);
  }, [category, fetchAllMeals]);

  const shouldComponentRender = () => {
    if (pending === true || products.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) { return <Spiner />; }
  return (
    <div>
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
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  products: PropTypes.instanceOf(array).isRequired,
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
