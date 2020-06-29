import React, {} from 'react';
import PropTypes from 'prop-types';
import { Error } from '../../UI/Error/Error';
import './Input.scss';

export const Input = props => (
  <>
    <label className="input__label" htmlFor={props.id}>
      {`${props.name[0].toUpperCase() + props.name.slice(1)}`}
    </label>
    <input
      className="input"
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
