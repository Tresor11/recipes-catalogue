import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MealPreview from './MealPreview';
import fetchProductsAction from '../actions/fetchAll';
import { getProductsError, getProducts, getProductsPending } from '../reducers';

const MealsList = props => {
  useEffect(() => {
    const { fetchProducts } = props;
    fetchProducts();
  }, []);
  const {
    products, error, pending,
  } = props;

  const shouldComponentRender = () => {
    if (pending === true || products.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) { return <h1> loading...</h1>; }
  return (
    <div className="product-list-wrapper">
      {error && <span className="product-list-error">error</span>}
      <h1>Got the data</h1>
      {products.map(el => <MealPreview key={el.id} src={el.strMealThumb} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
