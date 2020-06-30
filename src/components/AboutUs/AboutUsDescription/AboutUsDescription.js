import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsImage } from './AboutUsImage/AboutUsImage';
import { AboutUsText } from './AboutUsText/AboutUsText';

export const AboutUsDescription = props => {
  return (
    <div className="about-us__description">
      <AboutUsImage />
      <AboutUsText />
    </div>
  );
};

AboutUsDescription.propTypes = {
  
};
