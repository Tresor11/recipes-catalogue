import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MealsList from '../containers/MealsList';
import MealDetails from '../containers/MealDetails';
import AllCategories from './AllCategories';

const App = () => (
  <Switch>
    <Route path="/" component={AllCategories} exact />
    <Route path="/category/:category" component={MealsList} />
    <Route path="/meal/:id" component={MealDetails} />
  </Switch>
);


export default App;
