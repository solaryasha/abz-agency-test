
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RadioButton } from '../RadioButton/RadioButton';

export class Form extends Component {
  state = {

  }

  handleInputChange = ({ target }) => {
    const { value, type, id } = target;

    const valueToSave = type === 'radio'
      ? id
      : value;

    this.setState({
      [type]: valueToSave,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log([...event.target.children]);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Input
          type="name"
          name="Name"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <Input
          type="email"
          name="Email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <Input
          type="phone"
          name="Phone"
          onChange={this.handleInputChange}
          value={this.state.phone}
        />
        <RadioButton onChange={this.handleInputChange} />
        <Input type="file" onChange={this.handleInputChange} />
        <Button type="submit" text="Sign up now" />
      </form>
    );
  }
}

Form.propTypes = {

};
