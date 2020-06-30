import React from 'react';
import { mobileNavigationBlocks } from '../Navigation/NavigationItems/NavigationItems';
import { NavigationBlock } from '../Navigation/NavigationBlock/NavigationBlock';
// import PropTypes from 'prop-types';

export const MobileNavigation = ({ onClick }) => {
  return (
    <nav className="navigation">
      {
        mobileNavigationBlocks
          .map(block => <NavigationBlock content={block} onClick={onClick} />)
      }
    </nav>
  );
};