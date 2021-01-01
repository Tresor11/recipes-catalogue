import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchMeal from '../actions/fetchSingle';
import Spiner from '../components/Spiner';
import ReciperImgage from '../components/RecipeImage';
import RecipeDescription from '../components/RecipeDescription';
import { resetSelected } from '../actions/index';
import {
  getImg, getArea, getIntructions, getIngredient, getName, categoryName, getProductsPending,
} from '../helper/index';


const MealDetails = props => {
  const {
    img, area, ingredients, match, fetchMeal, name, category, pending, resetSelected,
  } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchMeal(id);
  }, [fetchMeal, id]);

  const shouldComponentRender = () => {
    if (name === undefined || pending === true) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<Spiner />);
  }

  return (
    <div className="h-80 w-100 d-flex">
      <div className="recip">
        <ReciperImgage className="recip-img  m-20 w-50 shadow" src={img} name={name} />
        <div className="desciption-div">
          <RecipeDescription category={category} className="w-100" area={area} ingredients={ingredients} />
          <Link to="/">
            <button type="button" onClick={resetSelected} className="shadow btn">Home</button>
          </Link>
          <Link to={`/category/${category}`}>
            <button type="button" onClick={resetSelected} className="shadow btn">Previous</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { singleMeal } = state;
  const { details } = singleMeal;
  return (
    {
      img: getImg(details),
      area: getArea(details),
      intructions: getIntructions(details),
      ingredients: getIngredient(details),
      name: getName(details),
      category: categoryName(details),
      pending: getProductsPending(details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
  resetSelected,
};

MealDetails.defaultProps = {
  img: '',
  pending: false,
  name: '',
  category: '',
  area: '',
  ingredients: [''],
};

MealDetails.propTypes = {
  img: PropTypes.string,
  area: PropTypes.string,
  pending: PropTypes.bool,
  fetchMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(String),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  name: PropTypes.string,
  category: PropTypes.string,
  resetSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
