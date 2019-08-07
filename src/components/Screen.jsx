import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Screen = ({ firstScreen }) => (
  <div className="mt-3 ml-3 mr-3 pt-1 col result-screen rounded">
    <p id="result" className="h1 text-right">{ firstScreen.length !== 0 ? firstScreen.join('') : 0 }</p>
    <p id="calcul" className=" tiny-text text-right">0</p>
  </div>
);

Screen.propTypes = {
  firstScreen: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

const mstp = ({ calculator }) => ({
  firstScreen: calculator.firstScreen,
});

export default connect(mstp)(Screen);
