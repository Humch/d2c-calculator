import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { finishOperation } from '../actions';

const EqualButton = ({ finishOperation: fOperation }) => (
  <button
    type="button"
    className="btn btn-primary btn-block maxi"
    onClick={() => fOperation()}
  >
    {'='}
  </button>
);

EqualButton.propTypes = {
  finishOperation: PropTypes.func.isRequired,
};

const mdtp = dispatch => bindActionCreators({ finishOperation }, dispatch);

export default connect(null, mdtp)(EqualButton);
