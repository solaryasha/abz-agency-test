import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { Button } from '../../Button/Button';
import './PromoHighlight.scss';
import { smallResolutionText, highResolutionText } from '../PromoText/PromoText';

const PromoHighlight = props => {
  return (
    <div className="promo__highlight">
      <h1 className="promo__title">
        Test assignment for frontend developer position
      </h1>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          desktop: '(min-width: 768px)',
        }}
      >
        {matches => (
          <p className="promo__text">
            {matches.mobile && smallResolutionText}
            {matches.desktop && highResolutionText}
          </p>
        )}
      </Media>
      <Button
        className="promo__button"
        text="Sing up now"
        type="button"
      />
    </div>
  );
};

PromoHighlight.propTypes = {
  
};

export default PromoHighlight;