import React from 'react';
import PropTypes from 'prop-types';

function AddBar({ handleSubmit, name, address, notes }) {
  return (
    <form handleSubmit={handleSubmit}>
      <input type="text" name="name" value={name} />
      <input type="text" name="address" value={address} />
      <input type="text" name="notes" value={notes} />
      <button>Add A Bar</button>
    </form>
  );
}

AddBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
};

export default AddBar;
