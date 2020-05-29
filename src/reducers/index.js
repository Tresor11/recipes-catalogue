import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import allMealsReducer from './allMeals';
import singleMealReducer from './singleMeal';
import { categoriesReducer } from './categories';

const finalReducer = combineReducers({
  allMeals: allMealsReducer,
  singleMeal: singleMealReducer,
  categories: categoriesReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
