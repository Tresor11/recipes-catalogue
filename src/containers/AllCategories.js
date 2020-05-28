import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCategories from '../actions/fetchCategories';
import Category from '../components/CategoryPreview';
import '../css/categories.css';
import {
  getProductsError, getProductsPending, getCategoriesList, categoryName, categoryDetails, categoryImage,
} from '../helper/index';

const AllCategories = props => {
  const { getCategories, categories } = props;
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="container">
      {categories.map(el => <Link key={el.strCategory} to={`/category/${el.strCategory}`}><Category name={categoryName(el)} description={categoryDetails(el)} src={categoryImage(el)} /></Link>)}
    </div>
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
      categories: getCategoriesList(categories),
      pending: getProductsPending(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
