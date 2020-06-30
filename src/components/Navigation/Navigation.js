import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';

export const Navigation = props => {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__items">About me</li>
        <li className="navigation__items">Relationships</li>
        <li className="navigation__items">Requirments</li>
        <li className="navigation__items">Users</li>
        <li className="navigation__items">Sign Up</li>
      </ul>
      {props.children}
    </nav>
  );
};

Navigation.propTypes = {
  
};
