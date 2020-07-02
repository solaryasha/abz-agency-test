import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ text, type, onClick, onSubmit, styles }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={
      styles === 'form' ? `button button--form` : `button`
    }
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
  styles: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  styles: PropTypes.string,
};
