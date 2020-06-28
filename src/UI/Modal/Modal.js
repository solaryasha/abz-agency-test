import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

export const Modal = ({ children }) => (
  <div className="modal">{children}</div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
