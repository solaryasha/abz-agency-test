import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './PromoHighlight.scss';

const PromoHighlight = props => {
  return (
    <div className="promo__highlight">
      <h1 className="promo__title">
        Test assignment for frontend developer position
      </h1>
      <div className="promo__texts">
        <p className="promo__text">
          We kindly remind you that your test
        </p>
        <p className="promo__text">
          assignment should be submited
          as a link to
        </p>
        <p className="promo__text">
          github/bitbucket repository.
        </p>
        <p className="promo__text--nomobile">
          Please be patient, we consider
          and respond to every application that meets minimum requirments.
          We look forward to your submussion. Good luck! The photo has ti scale
          in the banner area on the different screens
        </p>
      </div>
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