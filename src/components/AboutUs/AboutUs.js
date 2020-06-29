import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsDescription } from './AboutUsDescription/AboutUsDescription';
import { Heading } from '../Heading/Heading';
import './AboutUs.scss';
import { PaddingContainer } from '../../containers/PaddingContainer';

export const AboutUs = props => (
  <PaddingContainer>
    <section className="about-us">
      <Heading content="Let's get acquainted" />
      <AboutUsDescription />
    </section>
  </PaddingContainer>
);

AboutUs.propTypes = {
  
};
