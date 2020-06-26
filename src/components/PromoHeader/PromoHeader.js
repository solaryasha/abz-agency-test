
import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

export const PromoHeader = props => {
  return (
    <div className>
      <Logo />
      <Navigation />
    </div>
  );
};

PromoHeader.propTypes = {
  
};
