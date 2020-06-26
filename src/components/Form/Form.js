
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RadioButton } from '../RadioButton/RadioButton';

export class Form extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <form>
        <Input type="name" />
        <Input type="email" />
        <Input type="phone" />
        <RadioButton position={this.props.position} />
        <Input type="file" />
        <Button type="submit" text="Sign up now" />
      </form>
    );
  }
}

Form.propTypes = {

};
