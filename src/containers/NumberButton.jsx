import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { clickNumber } from '../actions';

const NumberButton = ({ number, clickNumber: clickN }) => (
  <button
    type="button"
    id={number}
    className="btn btn-primary btn-block"
    onClick={e => clickN(e.target.id)}
  >
    { number }
  </button>
);

NumberButton.propTypes = {
  clickNumber: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};

const mdtp = dispatch => bindActionCreators({ clickNumber }, dispatch);

export default connect(null, mdtp)(NumberButton);
