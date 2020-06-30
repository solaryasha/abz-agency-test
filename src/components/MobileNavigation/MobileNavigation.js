import React from 'react';
// import PropTypes from 'prop-types';

export const MobileNavigation = ({ onClick }) => {
  return (
    <nav
      className="navigation"
      onClick={() => onClick()}
    >
      <ul className="navigation__block">
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            About me
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Relationships
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Users
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Sign Up
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Terms and Conditions
          </a>
        </li>
      </ul>
      <ul className="navigation__block">
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            How it works
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Partnership
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Help
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Leave testimonial
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Contact us
          </a>
        </li>
      </ul>
      <ul className="navigation__block">
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Articles
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Our news
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Testimonials
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Licenses
          </a>
        </li>
        <li className="navigation__items">
          <a className="navigation__link" href="#registration">
            Privacy Policy
          </a>
        </li>
      </ul>
    </nav>
  );
};