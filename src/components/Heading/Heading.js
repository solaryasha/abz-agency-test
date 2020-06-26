
import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ content }) => {
  return (
    <h2>
      {content}
    </h2>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};
