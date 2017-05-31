import React from 'react';
import PropTypes from 'prop-types';

const Input = props =>
  <input
    type="text"
    placeholder="Type on me"
    onChange={props.onChangeText}
  />;

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired
};

export default Input;

