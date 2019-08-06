import React from 'react';

import PropTypes from 'prop-types';

const OperandeButton = ({ operande }) => (
  <button
    type="button"
    id="{operande}"
    className="btn btn-primary btn-block"
  >
    { operande }
  </button>
);

OperandeButton.propTypes = {
  operande: PropTypes.string.isRequired,
};

export default OperandeButton;
