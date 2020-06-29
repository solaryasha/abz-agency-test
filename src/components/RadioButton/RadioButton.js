import React, { Component } from 'react';
import { Input } from '../Input/Input';
import { RadioButtonShape } from '../../shapes/PropTypeShapes';
import { positionsUrl } from '../../API/urlHandler';
import './RadioButton.scss';

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
      <div className="radio-buttons">
        <p>Select your position: </p>
        {
          this.state.positions
            ? this.state.positions.map(position => (
              <div className="radio-buttons__wrapper">
                <Input
                  type="radio"
                  name={position.name}
                  value={position.name}
                  id={position.id}
                  onChange={this.props.onChange}
                />
              </div>

            ))
            : this.state.position
        }
      </div>
    );
  }
}

RadioButton.propTypes = {
};
