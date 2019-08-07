import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addOperande } from '../actions';

const OperandeButton = ({ operande, addOperande: addO }) => (
  <button
    type="button"
    id={operande}
    className="btn btn-primary btn-block"
    onClick={e => addO(e.target.id)}
  >
    { operande }
  </button>
);

OperandeButton.propTypes = {
  addOperande: PropTypes.func.isRequired,
  operande: PropTypes.string.isRequired,
};

const mdtp = dispatch => bindActionCreators({ addOperande }, dispatch);

export default connect(null, mdtp)(OperandeButton);
