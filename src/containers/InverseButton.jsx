import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { inverseNumber } from '../actions';

const InverseButton = ({ inverseNumber: iNumber }) => (
  <button
    type="button"
    className="btn btn-primary btn-block"
    onClick={() => iNumber()}
  >
    {'+/-'}
  </button>
);

InverseButton.propTypes = {
  inverseNumber: PropTypes.func.isRequired,
};

const mdtp = dispatch => bindActionCreators({ inverseNumber }, dispatch);

export default connect(null, mdtp)(InverseButton);
