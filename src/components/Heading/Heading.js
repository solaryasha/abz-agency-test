import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

export const Heading = ({ content }) => {
  return (
    <h2 className="heading">
      {content}
    </h2>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};
