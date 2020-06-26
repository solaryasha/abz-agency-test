import React, { Component } from 'react';
import User from './User/User';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { getUrl } from '../../API/urlHandler';

export class Users extends Component {
  state = {
    data: [],
    page: 1,
  }

  componentDidMount() {
    const correctUrl = getUrl(this.state.page, 6);

    this.#downloadData(correctUrl);
  }

  showMoreClick = () => {
    const correctUrl = getUrl(this.state.page, 6);

    this.#downloadData(correctUrl);
  }

  #downloadData = (correctUrl) => {
    fetch(correctUrl)
      .then(response => response.json())
      .then(({ users }) => this.setState(prevState => (
        {
          data: prevState.data.concat(users), page: prevState.page + 1,
        }
      )));
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
          onClick={this.showMoreClick}
        />
      </section>
    );
  }
}

Users.propTypes = {

};
