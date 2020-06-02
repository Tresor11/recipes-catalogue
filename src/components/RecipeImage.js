import React from 'react';
import PropTypes from 'prop-types';

const ReciperImgage = ({
  className, src, name,
}) => (
  <div className={className}>
    <img className="bg-img" src={src} alt={name} />
    <h1 className="top-text">{name}</h1>
  </div>
);

ReciperImgage.defaultProps = {
  className: 'w-50',
};

ReciperImgage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ReciperImgage;
