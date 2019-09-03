import React from 'react';
import PropTypes from 'prop-types';

import Bar from './Bar';

function Bars({ bars }) {
  const barList = bars.map((bar) => {
    return <Bar key={bar._id} bar={bar} />;
  });
  return (
    <ul>
      {barList}
    </ul>
  );
}

Bars.propTypes = {
  bars: PropTypes.array.isRequired
};

export default Bars;
