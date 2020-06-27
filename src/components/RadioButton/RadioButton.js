import React, { Component } from 'react';
import { Input } from '../Input/Input';
import { RadioButtonShape } from '../../shapes/PropTypeShapes';
import { positionsUrl } from '../../API/urlHandler';

export class RadioButton extends Component {
  state= {
    positions: null,
  }

  componentDidMount() {
    fetch(positionsUrl)
      .then(response => response.json())
      .then(({ positions }) => this.setState(() => ({ positions: positions })));
  }

  render() {
    return (
      <div>
        <p>Select your position: </p>
        {
          this.state.positions
            ? this.state.positions.map(position => (
              <Input
                type="radio"
                name={position.name}
                value={position.name}
                id={position.id}
                onChange={this.props.onChange}
              />
            ))
            : this.state.position
        }
      </div>
    );
  }
}

RadioButton.propTypes = {
};
