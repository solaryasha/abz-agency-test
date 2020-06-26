import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

const PromoHighlight = props => {
  return (
    <div>
      <h1>Test assignment for frontend developer position</h1>
      <p>
        We kindly remind you that your test assign,ent should be submited 
        as a link to github/bitbucket repository. Please be patient, we consider
        and respond to every application that meets minimum requirments.
        We look forward to your submussion. Good luck! The photo has ti scale 
        in the banner area on the different screens
      </p>
      <Button
        text="Sign up now"
        type="button"
      />
    </div>
  );
};

PromoHighlight.propTypes = {
  
};

export default PromoHighlight;