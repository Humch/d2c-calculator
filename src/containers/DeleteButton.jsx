import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteNumber } from '../actions';

const DeleteButton = ({ deleteNumber: delN }) => (
  <button
    type="button"
    className="btn btn-primary btn-block"
    onClick={() => delN()}
  >
    {'<----'}
  </button>
);

DeleteButton.propTypes = {
  deleteNumber: PropTypes.func.isRequired,
};

const mdtp = dispatch => bindActionCreators({ deleteNumber }, dispatch);

export default connect(null, mdtp)(DeleteButton);
