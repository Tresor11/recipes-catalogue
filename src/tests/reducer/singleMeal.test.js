import singleMealReducer from '../../reducers/singleMeal';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('update categpry', () => {
  it('should create an action to change category', () => {
    expect(singleMealReducer(initialState, { type: 'FETCH_MEAL_SUCCESS', details: { one: '1', two: '2' } })).toEqual({ ...initialState, details: { one: '1', two: '2' } });
  });
});
