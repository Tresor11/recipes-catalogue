import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import getCategories from '../actions/fetchCategories';
import Category from '../components/CategoryPreview';
import Spiner from '../components/Spiner';
import {
  getProductsError,
  getProductsPending,
  getCategoriesList,
  categoryName,
  categoryDetails,
  categoryImage,
} from '../helper/index';

const AllCategories = props => {
  const { getCategories, categories, pending } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const shouldComponentRender = () => {
    if (pending === true || categories.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<Spiner />);
  }

  return (
    <div>
      <h1 className="text-c g-text"> EXPORE OUR AVAILABLE CATEGORIES</h1>
      <div className="container">
        {categories.map(el => <Link key={el.idCategory} to={`/category/${el.strCategory}`}><Category name={categoryName(el)} description={categoryDetails(el)} src={categoryImage(el)} /></Link>)}
      </div>
    </div>
  );
};

AllCategories.propTypes = {
  pending: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(object).isRequired,
  getCategories: PropTypes.func.isRequired,
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
