import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, type, onClick, onSubmit }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    onClick={() => onClick()}
    onSubmit={event => onSubmit(event)}
  >
    {text}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
