import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './index';

function fetchMeal(id) {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res));
        console.log(res);
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}