const fetchProductsPending = () => ({
  type: 'FETCH_PRODUCTS_PENDING',
});

const fetchProductsSuccess = products => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products,
});

const fetchProductsError = error => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});
const UPDATE_CATEGORY = category => ({
  type: 'UPDATE_CATEGORY',
  category,
});

const SELECT_MEAL = bool => ({
  type: 'MEAL_SELECTED',
  selected: bool,
});
const fetchSingleMeal = details => ({
  type: 'FETCH_MEAL_SUCCESS',
  details,
});

export {
  fetchProductsError,
  fetchProductsPending,
  fetchProductsSuccess,
  UPDATE_CATEGORY,
  SELECT_MEAL,
  fetchSingleMeal,
};
