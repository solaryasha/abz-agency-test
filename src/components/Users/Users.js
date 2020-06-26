import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User/User';
import { Button } from '../Button/Button';

export class Users extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <section>
        <h2>Our cheerful users</h2>
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
