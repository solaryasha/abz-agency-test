
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import image from '../../../../assets/man-laptop-v1.svg'

export const AboutUsImage = memo((props) => (
  <div>
    <img src={image} alt="man with laptop" />
  </div>
));

AboutUsImage.propTypes = {
  
};
