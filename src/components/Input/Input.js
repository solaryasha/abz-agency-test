import React, {} from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => (
  <>
    <label htmlFor={props.name}>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value=""
      />
      {props.name}
    </label>
  </>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
