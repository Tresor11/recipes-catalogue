import allMealsReducer from '../../reducers/allMeals';

// import singleMealReducer from './singleMeal';
// import categoriesReducer from './categories';
const initialState = {
  pending: false,
  products: [],
  error: undefined,
  category: undefined,
};

describe('update categpry', () => {
  it('should create an action to change category', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_PENDING' })).toEqual({ ...initialState, pending: true });
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_SUCCESS', products: ['a', 'b'] })).toEqual({ ...initialState, pending: false, products: ['a', 'b'] });
  });
});
