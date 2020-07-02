import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';
import { NavigationBlock } from './NavigationBlock/NavigationBlock';
import { desktopNavigation } from './NavigationItems/NavigationItems';

export const Navigation = ({ onClick }) => {
  return (
    <nav className="navigation">
      <NavigationBlock content={desktopNavigation} onClick={onClick} />
    </nav>
  );
};

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};
