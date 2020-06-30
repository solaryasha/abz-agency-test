import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from '../Navigation/Navigation';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import { Logo } from '../Logo/Logo';
import './SideBar.scss';
import { PaddingContainer } from '../../containers/PaddingContainer';

export const SideBar = ({ isOpen }) => {
  let attachedClasses = ['sidebar', 'sidebar--closed'];

  if (isOpen) {
    attachedClasses = ['sidebar', 'sidebar--opened'];
  }

  return (
    <>
      {isOpen ? <Backdrop /> : isOpen}
      <div className={attachedClasses.join(' ')}>
        {/* <PaddingContainer> */}
        <div class="sidebar__logo">
          <Logo />
        </div>
        <MobileNavigation />
        {/* </PaddingContainer> */}
      </div>
    </>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
