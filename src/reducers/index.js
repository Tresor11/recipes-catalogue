import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import { allMealsReducer } from './allMeals';
import selectReducer from './selectMeal';
import { singleMealReducer } from './singleMeal';

const finalReducer = combineReducers({
  allMeals: allMealsReducer,
  singleMeal: singleMealReducer,
  selected: selectReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
