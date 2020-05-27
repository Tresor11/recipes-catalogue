const initialState = {
  pending: false,
  details: {},
  error: null,
};

const singleMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_MEAL_SUCCESS':
      return {
        ...state,
        pending: false,
        details: action.details,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const getImg = state => `${state.strMealThumb}/preview`;
const getArea = state => state.strArea;

export { singleMealReducer, getImg, getArea };
