import React from 'react';

const RecipeDescription = ({
  category, area, ingredients,className
}) => (
  <div className={className}>
    <p className="text-b p-10">
      <span className="m-10">
        Category :
      </span>
      <span className="m-10 shadow ingredient">
        {category}
      </span>
    </p>
    <hr />
    <p className="text-b p-10">
      <span className="m-10">
        Area :
      </span>
      <span className="m-10 shadow ingredient">
        {area}
      </span>
    </p>
    <hr />
    <div className="d-flex flex-w">
      <p className="text-b">
        ingredients:
      </p>
      {ingredients.map(el => <span className="m-10 shadow ingredient" key={el}>{el}</span>)}
    </div>
    <hr />
  </div>
);

export default RecipeDescription;
