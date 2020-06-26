import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User/User';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { url } from '../../API/urlHandler';

export class Users extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(({ users }) => {
        this.setState({ data: users });
      });
  }

  render() {
    return (
      <section>
        <Heading content="Our cheerful users" />
        <p>
          Attention! Sorting users by registration date
        </p>
        {
          this.state.data
            ? this.state.data.map(user => <User content={user} />)
            : this.state.data
        }
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
