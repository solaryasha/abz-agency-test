import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';

const FileInput = props => {
  return (
    <Input
      type="file"
      name="file"
      onChange={props.onChange}
    />
  );
};

FileInput.propTypes = {
  
};

export default FileInput;