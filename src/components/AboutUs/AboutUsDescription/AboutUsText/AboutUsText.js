import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const AboutUsText = memo((props) => {
  return (
    <div>
      <h3>I am cool frontend developer</h3>
      <p>
        We will evaluate how clean your approach to writing CSS
        and Javascript code is. You can use any CSS and Javascript
        3rd party labraries without any restriction.
      </p>
      <p>
        If 3rd party css/javascript libraries are added to the project
        via bower/npm/yarn you will get bonus points. If you use
        any task runner (gulp/webpack) you will get bonus points
        as well. Slice service directory page PSD mockup into
        HTML5/CSS3.
      </p>
      <a href="#form">Sing up now</a>
    </div>
  );
});

AboutUsText.propTypes = {
  
};
