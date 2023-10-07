import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeals from '../containers/AllRecipes';
import MealDetails from '../containers/RecipeDetails';
import NavBar from './Nav';
import AllCategories from '../containers/AllCategories';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" component={AllCategories} exact />
      <Route path="/category/:category" component={AllMeals} />
      <Route path="/meal/:id" component={MealDetails} />
    </Routes>
  </div>
);


export default App;
