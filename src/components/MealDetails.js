import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchMeal from '../actions/fetchSingle';
import {
  getImg, getArea, getIntructions, getIngredient, getName, categoryName,
} from '../helper/index';

const MealDetails = props => {
  const {
    img, area, intructions, ingredients, log, match, fetchMeal, name, category
  } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchMeal(id);
  }, []);
  return (
    <div className="h-80">
      <div className=" d-flex jutify-a recip w-100">
        <div className="recip-img m-20 w-50">
          <img className="bg-img" src={img} alt={area} />
          <h1 className="top-text">{name}</h1>
        </div>
        <div className="w-50">
          <p className="text-b">
            Category:
            {category}
          </p>
          <p className="text-b">
            Area:
            {area}
          </p>
          <hr />
          <div className="d-flex flex-w">
            <p className="text-b">
              ingredients:
            </p>
            {ingredients.map(el => <span className="m-10" key={el}>{el}</span>)}
          </div>
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
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
};

MealDetails.propTypes = {
  img: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
