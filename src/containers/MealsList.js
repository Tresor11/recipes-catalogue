import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MealPreview from '../components/MealPreview';
import CategoryFilter from '../components/CategoryFilter';
import fetchAllMeals from '../actions/fetchAll';
import fetchMeal from '../actions/fetchSingle';
import { getProductsError, getProducts, getProductsPending } from '../reducers/allMeals';
import { UPDATE_CATEGORY, SELECT_MEAL } from '../actions/index';

const MealsList = props => {
  const {
    products, error, pending, category, fetchProducts, addFilter, select, fetchSingle,
  } = props;

  const handleFilterChange = evt => {
    const newCategory = evt.target.value;
    addFilter(evt.target.value);
    fetchProducts(newCategory);
  };
  const handleSelect = id => {
    fetchSingle(id);
    select(true);
  };

  useEffect(() => {
    fetchProducts(category);
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
  fetchProducts: fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
  select: SELECT_MEAL,
  fetchSingle: fetchMeal,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
