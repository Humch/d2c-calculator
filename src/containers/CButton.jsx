import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { eraseAll } from '../actions';

const CEButton = ({ eraseAll: eAll }) => (
  <button
    type="button"
    className="btn btn-primary btn-block"
    onClick={() => eAll()}
  >
    {'C'}
  </button>
);

CEButton.propTypes = {
  eraseAll: PropTypes.func.isRequired,
};

const mdtp = dispatch => bindActionCreators({ eraseAll }, dispatch);

export default connect(null, mdtp)(CEButton);
