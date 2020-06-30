import React from 'react';
import { Button } from '../../Button/Button';

export const FormSummary = ({ onClick }) => (
  <>
    <header>
      <h3>Congratulations</h3>
      <button
        onClick={() => onClick()}
        type="button"
      >
        x
      </button>
    </header>
    <p>You have successfully passed the registration</p>
    <Button
      type="button"
      text="Great"
      onClick={() => onClick()}
    />
  </>
);