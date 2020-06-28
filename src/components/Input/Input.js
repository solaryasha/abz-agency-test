import React, {} from 'react';
import PropTypes from 'prop-types';
import { Error } from '../../UI/Error/Error';

export const Input = props => (
  <>
    <label htmlFor={props.id}>{props.name}</label>
    <input
      type={props.type}
      name={
        props.type === 'radio'
          ? 'position_id'
          : props.name
      }
      id={props.id}
      value={props.value}
      onChange={event => props.onChange(event)}
    />
    {props.error
      ? <Error message={props.error} />
      : null
    }
  </>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
