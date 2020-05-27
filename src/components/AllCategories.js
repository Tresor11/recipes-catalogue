import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCategories from '../actions/fetchCategories';
import { getProductsError, getProducts, getProductsPending } from '../reducers/allMeals';
import { categoriesReducer } from '../reducers/categories';

const AllCategories = props => {
  const { getCategories, categories } = props;
  useEffect(() => {
    getCategories();
  }, []);
  console.log(props);
  return (
    categories.map(el => <Link key={el.strCategory} to={`/category/${el.strCategory}`}><li>{el.strCategory}</li></Link>)
  );
};

const mapDispatchToProps = {
  getCategories,
};

const mapStateToProps = state => {
  const { categories } = state;
  return (
    {
      error: getProductsError(categories),
      categories: categories.categories,
      pending: getProductsPending(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
