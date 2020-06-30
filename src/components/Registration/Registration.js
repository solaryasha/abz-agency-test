import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Heading/Heading';
import { Form } from '../Form/Form';
import './Registration.scss';
import { PaddingContainer } from '../../containers/PaddingContainer';

export class Registration extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div id="registration" className="registration">
        <Heading content="Register to get a work" />
        <p className="registration__message">
          Attention! After successful registration and alert, update the
          list of users in the block from the top
        </p>
        <PaddingContainer>
          <Form />
        </PaddingContainer>
      </div>
    );
  }
}

Registration.propTypes = {

};
