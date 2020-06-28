import React from 'react';
import { Button } from '../../Button/Button';

export const FormSummary = ({ onClick }) => (
  <>
    <header>
      <h3>Congratulations</h3>
      <span
        onClick={() => onClick}
        onKeyPress={() => onClick}
        role="button"
        tabIndex={0}
      >
        x
      </span>
    </header>
    <p>You have successfully passed the registration</p>
    <Button
      type="button"
      text="Great"
      onClick={() => onClick()}
    />
  </>
);