import { Component } from 'react';

export default class FormListInput extends Component {

  render() {
    return (
      <div>
        <label>
          <input
            type="text"
            name="name"
            value={this.props.newItem}
            onChange={this.props.handleChange}
          />
        </label>
      </div>
    );
  }
}
