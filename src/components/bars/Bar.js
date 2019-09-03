import React from 'react';
import PropTypes from 'prop-types';

function Bar({ bar }) {
  return (
    <li>
      <h2>{bar.name}</h2>
      <p>{bar.address}</p>
      <p>{bar.notes}</p>
    </li>
  );
}

Bar.propTypes = {
  bar: PropTypes.object.isRequired
};

export default Bar;
