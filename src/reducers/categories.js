const initialState = {
  pending: false,
  categories: [],
  error: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        pending: false,
        categories: action.categories,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default categoriesReducer;
