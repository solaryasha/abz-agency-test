import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Heading/Heading';
import { Form } from '../Form/Form';

export class Registration extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Heading content="Register" />
        <p>
          Attention! After successful registration and alert, update the
          list of users in the block from the top
        </p>
        <Form />
      </div>
    );
  }
}

Registration.propTypes = {

};
