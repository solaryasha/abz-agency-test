
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg'

export const Logo = props => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

Logo.propTypes = {
  
};
