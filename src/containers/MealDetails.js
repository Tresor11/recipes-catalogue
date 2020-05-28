import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object, array } from 'prop-types';
import { Link } from 'react-router-dom';
import fetchMeal from '../actions/fetchSingle';
import Spiner from '../components/Spiner';
import { resetSelected } from '../actions/index';
import {
  getImg, getArea, getIntructions, getIngredient, getName, categoryName, getProductsPending,
} from '../helper/index';


const MealDetails = props => {
  const {
    img, area, ingredients, match, fetchMeal, name, category, pending, resetSelected
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
    <div className="h-80 w-70 w-100 d-flex">
      <div className=" d-flex jutify-a recip w-100">
        <div className="recip-img m-20 w-50">
          <img className="bg-img" src={img} alt={area} />
          <h1 className="top-text">{name}</h1>
        </div>
        <div className="w-50">
          <p className="text-b p-10">
            <span className="m-10">
              Category :
            </span>
            <span className="m-10 shadow ingredient">
              {category}
            </span>
          </p>
          <hr />
          <p className="text-b p-10">
            <span className="m-10">
              Area :
            </span>
            <span className="m-10 shadow ingredient">
              {area}
            </span>
          </p>
          <hr />
          <div className="d-flex flex-w">
            <p className="text-b">
              ingredients:
            </p>
            {ingredients.map(el => <span className="m-10 shadow ingredient" key={el}>{el}</span>)}
          </div>
          <hr />
          <div>
            <Link to="/">
              <button type="button" onClick={resetSelected} className="shadow btn">Home</button>
            </Link>
            <Link to={`/category/${category}`}>
              <button type="button" onClick={resetSelected} className="shadow btn">Previous</button>
            </Link>
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
      pending: getProductsPending(details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
  resetSelected,
};

MealDetails.propTypes = {
  img: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  fetchMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.instanceOf(array).isRequired,
  match: PropTypes.instanceOf(object).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
