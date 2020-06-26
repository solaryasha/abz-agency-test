import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, type, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} onClick={() => onClick()}>{text}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
