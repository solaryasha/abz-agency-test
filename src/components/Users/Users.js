import React, { Component } from 'react';
import Media from 'react-media';
import User from './User/User';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { getUrl } from '../../API/urlHandler';
import './Users.scss';

export class Users extends Component {
  state = {
    data: [],
    page: 1,
  }

  componentDidMount() {
    let correctUrl;

    correctUrl = getUrl(this.state.page, 6);
    this.#downloadData(correctUrl);
  }

  showMoreClick = () => {
    const correctUrl = getUrl(this.state.page, 6);

    // this.#downloadData(correctUrl);
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
      <section className="users">
        <Heading content="Our cheerful users" />
        <p className="users__text">
          Attention! Sorting users by registration date
        </p>

        <div className="users__grid">
          {
            this.state.data
              ? (
                <Media
                  queries={{
                    mobile: '(max-width: 768px)',
                    medium: '(min-width: 769px)',
                  }}
                >
                  {
                    (matches) => {
                      if (matches.mobile) {
                        return (this.state.data
                          .slice(0, 3).map(user => <User content={user} />));
                      }

                      return (this.state.data
                        .map(user => <User content={user} />));
                    }
                  }
                </Media>
              )
              : this.state.data
          }
        </div>
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
