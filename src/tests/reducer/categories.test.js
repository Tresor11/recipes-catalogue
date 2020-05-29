/* eslint-disable import/no-named-as-default */

import categoriesReducer from '../../reducers/categories';

const initialState = {
  pending: false,
  categories: [],
  error: undefined,
};

describe('update categpry', () => {
  it('should create an action to change category', () => {
    expect(categoriesReducer(initialState, { type: 'FETCH_CATEGORIES_SUCCESS', categories: [1, 2] })).toEqual({ ...initialState, categories: [1, 2] });
  });
});
