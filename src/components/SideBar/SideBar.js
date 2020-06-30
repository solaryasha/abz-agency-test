import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import { Logo } from '../Logo/Logo';
import './SideBar.scss';

export const SideBar = ({ isOpen, onClick }) => {
  let attachedClasses = ['sidebar', 'sidebar--closed'];

  if (isOpen) {
    attachedClasses = ['sidebar', 'sidebar--opened'];
  }

  return (
    <>
      {isOpen ? <Backdrop onClick={onClick} /> : null}
      <div className={attachedClasses.join(' ')}>
        <div className="sidebar__logo">
          <Logo />
        </div>
        <MobileNavigation onClick={onClick} />
      </div>
    </>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
