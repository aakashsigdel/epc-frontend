import React from 'react';
import PropTypes from 'prop-types';

const Display = props =>
  <div
    style={{
      width: 400,
      height: 100,
      backgroundColor: props.bgColor
    }}
    onClick={props.onClick}
  >
    <span style={{backgroundColor: 'grey', opacity: 0.8}}>
      {props.inputText}
    </span>
  </div>;

Display.propTypes = {
  inputText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Display;
