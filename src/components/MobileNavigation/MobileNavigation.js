import React from 'react';
// import PropTypes from 'prop-types';

export const MobileNavigation = props => {
  return (
    <nav className="navigation">
      <ul className="navigation__block">
        <li className="navigation__items">About me</li>
        <li className="navigation__items">Relationships</li>
        <li className="navigation__items">Users</li>
        <li className="navigation__items">Sign Up</li>
        <li className="navigation__items">Terms and Conditions</li>
      </ul>
      <ul className="navigation__block">
        <li className="navigation__items">How it works</li>
        <li className="navigation__items">Partnership</li>
        <li className="navigation__items">Help</li>
        <li className="navigation__items">Leave testimonial</li>
        <li className="navigation__items">Contact us</li>
      </ul>
      <ul className="navigation__block">
        <li className="navigation__items">Articles</li>
        <li className="navigation__items">Our news</li>
        <li className="navigation__items">Testimonials</li>
        <li className="navigation__items">Licenses</li>
        <li className="navigation__items">Privacy Policy</li>
      </ul>
    </nav>
  );
};