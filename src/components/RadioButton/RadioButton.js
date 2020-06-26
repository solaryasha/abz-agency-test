import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';

export class RadioButton extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Input type="radio" name="Hello" value="FrontEnd"/>
    );
  }
}

RadioButton.propTypes = {

};
