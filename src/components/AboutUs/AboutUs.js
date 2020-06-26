import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsDescription } from './AboutUsDescription/AboutUsDescription';
import { Heading } from '../Heading/Heading';

export const AboutUs = props => (
  <section>
    <Heading content="Let's get acquainted" />
    <AboutUsDescription />
  </section>
);

AboutUs.propTypes = {
  
};
