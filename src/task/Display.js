import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = props =>
  <div
    className="display-container"
    style={{ backgroundColor: props.bgColor }}
    onClick={props.onClick}
  >
    <div>
      {props.inputText}
    </div>
  </div>;

Display.propTypes = {
  inputText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Display;
