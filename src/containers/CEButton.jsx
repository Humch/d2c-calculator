import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { delFirstScreen } from '../actions';

const CEButton = ({ delFirstScreen: delFS }) => (
  <button
    type="button"
    className="btn btn-primary btn-block"
    onClick={() => delFS()}
  >
    {'CE'}
  </button>
);

CEButton.propTypes = {
  delFirstScreen: PropTypes.func.isRequired,
};

const mdtp = dispatch => bindActionCreators({ delFirstScreen }, dispatch);

export default connect(null, mdtp)(CEButton);
