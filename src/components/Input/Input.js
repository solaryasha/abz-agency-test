import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <>
        <label htmlFor={this.props.name}>
          <input
            type={this.props.type}
            name={this.props.name}
            id={this.props.name}
            value=""
          />
          {this.props.name}
        </label>
      </>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
