import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMeals from '../containers/AllMeals';
import MealDetails from './MealDetails';
import AllCategories from '../containers/AllCategories';

const App = () => (
  <Switch>
    <Route path="/" component={AllCategories} exact />
    <Route path="/category/:category" component={AllMeals} />
    <Route path="/meal/:id" component={MealDetails} />
  </Switch>
);


export default App;
