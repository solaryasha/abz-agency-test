import React from 'react';
import PropTypes from 'prop-types';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { NavigationLinkShape } from '../../../shapes/PropTypeShapes';

export const NavigationBlock = ({ content, onClick }) => {

  return (
    <ul className="navigation__block">
      {
        content.map(link => <NavigationLink name={link} onClick={onClick} />)
      }
    </ul>
  );
};

NavigationBlock.propTypes = {
  content: PropTypes.arrayOf(NavigationLinkShape).isRequired,
};
