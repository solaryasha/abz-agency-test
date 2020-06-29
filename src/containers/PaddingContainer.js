import React from 'react';
import PropTypes from 'prop-types';
import './PaddingContainter.scss';

export const PaddingContainer = ({ children }) => {
  return (
    <div className="padding-container">
      {children}
    </div>
  );
};

PaddingContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
