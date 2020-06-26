import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsImage } from './AboutUsImage/AboutUsImage';
import { AboutUsText } from './AboutUsText/AboutUsText';

export const AboutUsDescription = props => {
  return (
    <div>
      <AboutUsImage />
      <AboutUsText />
    </div>
  );
};

AboutUsDescription.propTypes = {
  
};
