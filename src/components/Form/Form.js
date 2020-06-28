
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RadioButton } from '../RadioButton/RadioButton';
import FileInput from '../FileInput/FileInput';
import { tokenUrl, url, createRequestBody } from '../../API/urlHandler';
import { Modal } from '../../UI/Modal/Modal';
import { FormSummary } from './FormSummary/FormSummary';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import { validateForm } from './FormValidation/FormValidation';

export class Form extends Component {
  state = {
    showModal: null,
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

  showModalHandler = () => {
    this.setState({ showModal: true });
  }

  hideModalHandler= () => {
    this.setState({ showModal: null });
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    const errors = validateForm(this.state);

    Object.entries(errors).forEach((key) => {
      this.setState({ [`error${key[0]}`]: key[1] });
    });

    if (!Object.keys(errors).length) {
      const formData = new FormData();
      const res = await fetch(tokenUrl);
      const { token } = await res.json();

      Object.entries(this.state)
        .forEach(item => formData.append(item[0], item[1]));

      const options = createRequestBody(formData, token);

      await fetch(url, options)
        .then(response => response.json())
        .then(data => { console.log(data); });

      this.setState({ showModal: true });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {this.state.showModal
          ? (
            <>
              <Backdrop />
              <Modal>
                <FormSummary onClick={this.hideModalHandler} />
              </Modal>
            </>
          )
          : this.state.showModal
        }
        <Input
          type="name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.name}
          error={this.state.errorname}
        />
        <Input
          type="text"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
          error={this.state.erroremail}
        />
        <Input
          type="phone"
          name="phone"
          onChange={this.handleInputChange}
          value={this.state.phone}
          error={this.state.errorphone}
        />
        <RadioButton onChange={this.handleInputChange} />
        <FileInput onChange={this.handleUploadFile} />
        <Button
          type="submit"
          text="Sign up now"
        />
      </form>
    );
  }
}

Form.propTypes = {

};
