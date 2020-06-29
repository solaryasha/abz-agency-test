
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import image from '../../../../assets/man-laptop-v1.svg';
import '../../AboutUs.scss';

export const AboutUsImage = memo((props) => (
  <img className="about-us__image" src={image} alt="man with laptop" />
));

AboutUsImage.propTypes = {
  
};
