
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RadioButton } from '../RadioButton/RadioButton';
import FileInput from '../FileInput/FileInput';
import { tokenUrl, url } from '../../API/urlHandler';

export class Form extends Component {
  state = {

  }

  handleInputChange = ({ target }) => {
    const { value, name, id } = target;

    const valueToSave = name === 'position_id'
      ? Number(id)
      : value;

    this.setState({
      [name]: valueToSave,
    });
  }

  handleUploadFile = (event) => {
    this.setState({
      photo: event.target.files[0],
    });
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    const res = await fetch(tokenUrl);
    const { token } = await res.json();

    Object.entries(this.state)
      .forEach(item => formData.append(item[0], item[1]));

    const options = this.#getrequestOptions(formData, token);

    await fetch(url, options)
      .then(response => response.json())
      .then(data => { console.log(data); });
  }

  #getrequestOptions = (getData, newToken) => ({
    method: 'POST',
    headers: { Token: newToken },
    body: getData,
  })

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Input
          type="name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <Input
          type="email"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <Input
          type="phone"
          name="phone"
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
