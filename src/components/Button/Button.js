import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({text, type}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type}>{text}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
