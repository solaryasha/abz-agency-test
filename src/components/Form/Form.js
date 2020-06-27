
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RadioButton } from '../RadioButton/RadioButton';
import FileInput from '../FileInput/FileInput';
import { tokenUrl } from '../../API/urlHandler';

export class Form extends Component {
  state = {

  }

  handleInputChange = ({ target }) => {
    const { value, name, id } = target;

    const valueToSave = name === 'radio'
      ? id
      : value;

    this.setState({
      [name]: valueToSave,
    });
  }

  getToken = () => {
    fetch(tokenUrl)
      .then(response => response.json())
      .then(({ token })=> this.setState({ token }));
  }

  handleUploadFile = (event) => {
    this.setState({
      image: event.target.files[0],
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getToken();
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
        <FileInput onChange={this.handleUploadFile} />
        <Button type="submit" text="Sign up now" />
      </form>
    );
  }
}

Form.propTypes = {

};
