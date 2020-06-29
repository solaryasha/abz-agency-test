
import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { DesktopOnly } from '../../containers/DesktopOnly';
import { HamburgerMenu } from '../../UI/HamburgerMenu/HamburgerMenu';
import './PromoHeader.scss';
import { PaddingContainer } from '../../containers/PaddingContainer';

export const PromoHeader = props => {
  return (
    <PaddingContainer>
      <div className="promo__header">
        <Logo />
        <DesktopOnly>
          <Navigation />
        </DesktopOnly>
        <HamburgerMenu />
      </div>
    </PaddingContainer>
  );
};

PromoHeader.propTypes = {
  
};
