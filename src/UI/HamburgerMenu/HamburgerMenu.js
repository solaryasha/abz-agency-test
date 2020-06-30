import React from 'react';
import './HamburgerMenu.scss';

export const HamburgerMenu = (props) => (
  <button
    type="button"
    className="hamburger"
    onClick={() => props.onClick()}
  >
    <span className="hamburger__line" />
    <span className="hamburger__line" />
    <span className="hamburger__line" />
  </button>
);
