import React from 'react';
import { Input } from '../Input/Input';
import { RadioButtonShape } from '../../shapes/PropTypeShapes';

export const RadioButton = ({ content }) => {
  const { positions } = content;

  return (
    <>
      {
        positions.map(positon => (
          <Input
            type="radio"
            name={positon.name}
            value={positon.name}
          />
        ))
      }
    </>
  );
};

RadioButton.propTypes = {
  content: RadioButtonShape.isRequired,
};
