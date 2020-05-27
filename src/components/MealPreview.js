import React from 'react';

const Meal = ({
  src, onClick, name, id,
}) => (
  <div onClick={()=>onClick(id)}>
    <h1>{name}</h1>
<p>{id}</p>
    <img src={src} alt="" />
  </div>
);
export default Meal;
