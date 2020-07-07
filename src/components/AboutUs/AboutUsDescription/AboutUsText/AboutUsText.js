import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const AboutUsText = memo((props) => {
  return (
    <div className="about-us__texts padding-container">
      <h3 className="about-us__heading">I am cool frontend developer</h3>
      <div className="about-us__first-block">
        <p className="about-us__text">
          We will evaluate how clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries
          without any restriction.
        </p>
      </div>
      <div className="about-us__second-block">
        <p className="about-us__text">
          If 3rd party css/javascript libraries are added to the project
          via bower/npm/yarn you will get bonus points. If you use
          any task runner (gulp/webpack) you will get bonus points
          as well. Slice service directory page PSD mockup into
          HTML5/CSS3.
        </p>
      </div>
      <a className="about-us__link" href="#form">Sing up now</a>
    </div>
  );
});

AboutUsText.propTypes = {
  
};
