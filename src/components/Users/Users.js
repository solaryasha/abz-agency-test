import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User/User';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';

export class Users extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <section>
        <Heading content="Our cheerful users" />
        <p>
          Attention! Sorting users by registration date
        </p>
        <User />
        <Button
          text="Show more"
          type="button"
        />
      </section>
    );
  }
}

Users.propTypes = {

};
