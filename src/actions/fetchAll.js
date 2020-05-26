import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './index';

function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res.meals));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
