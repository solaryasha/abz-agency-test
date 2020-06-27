
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RadioButton } from '../RadioButton/RadioButton';
import { positionsUrl } from '../../API/urlHandler';

export class Form extends Component {
  state = {
    position: null,
  }

  componentDidMount() {
    fetch(positionsUrl)
      .then(response => response.json())
      .then(data => this.setState(prevState => ({ position: data })));
  }

  render() {

    return (
      <form className="form">
        <Input type="name" name="Name" />
        <Input type="email" name="Email" />
        <Input type="phone" name="Phone" />
        {this.state.position
          ? <RadioButton content={this.state.position} />
          : this.state.position
        }
        <Input type="file" />
        <Button type="submit" text="Sign up now" />
      </form>
    );
  }
}

Form.propTypes = {

};
