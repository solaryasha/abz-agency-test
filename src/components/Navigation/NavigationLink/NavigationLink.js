import React from 'react';
import { NavigationLinkShape } from '../../../shapes/PropTypeShapes';

export const NavigationLink = ({ name, onClick }) => (
  <li className="navigation__items">
    <a
      className="navigation__link"
      href="#registration"
      onClick={onClick}
    >
      {name}
    </a>
  </li>
);

NavigationLink.propTypes = NavigationLinkShape;
