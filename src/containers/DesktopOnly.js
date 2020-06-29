import React from 'react';
import PropTypes from 'prop-types';
import './DesktopOnly.scss';

export const DesktopOnly = ({ children }) => (
  <div className="desktop-only">
    {children}
  </div>
);

DesktopOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
