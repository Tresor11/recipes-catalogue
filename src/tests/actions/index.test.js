import {
  UPDATE_CATEGORY,
  fetchSingleMeal,
} from '../../actions/index';

describe('update categpry', () => {
  it('should create an action to change category', () => {
    const text = 'Beff';
    const expectedAction = {
      type: 'UPDATE_CATEGORY',
      category: text,
    };
    expect(UPDATE_CATEGORY(text)).toEqual(expectedAction);
  });
});

describe('get recipe details', () => {
  it('should create an action get the repice details', () => {
    const data = { name: 'test', category: 'jest' };
    const expectedAction = {
      type: 'FETCH_MEAL_SUCCESS',
      details: data,
    };
    expect(fetchSingleMeal(data)).toEqual(expectedAction);
  });
});
