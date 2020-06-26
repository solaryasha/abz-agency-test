
import React from 'react';
import PropTypes from 'prop-types';
import { PromoHeader } from '../PromoHeader/PromoHeader';
import PromoHighlight from '../PromoHighlight/PromoHighlight';

export const Promo = props => {
  return (
    <div>
      <PromoHeader />
      <PromoHighlight />
    </div>
  );
};

Promo.propTypes = {
  
};
