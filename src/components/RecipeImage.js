import React from 'react';

const ReciperImgage = ({
  className, src, name,
}) => (
  <div className={className}>
    <img className="bg-img" src={src} alt={name} />
    <h1 className="top-text">{name}</h1>
  </div>
);

export default ReciperImgage;
